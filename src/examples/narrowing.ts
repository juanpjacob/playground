// ----------- BAD -----------

interface Api2 {
  name: string;
  id: string;
  technology: "flexGateway" | "mule3" | "mule4";
  flexGatewayProperty?: string;
  mule3Property?: string;
  mule4Property?: string;
}

function getApiSpecialProperty2(api: Api2): string {
  if (api.technology == "flexGateway") {
    return api.flexGatewayProperty;
  }

  if (api.technology == "mule3") {
    return api.mule3Property;
  }

  if (api.technology == "mule4") {
    return api.mule4Property;
  }
}


// ----------- GOOD -----------


interface BaseApi {
  name: string;
  id: string;
}

type FlexGatewayApi = BaseApi & {
  technology: "flexGateway",
  flexGatewayProperty: string
}

type Mule3Api = BaseApi & {
  technology: "mule3",
  mule3Property: string
};

type Mule4Api = BaseApi & {
  technology: "mule4",
  mule4Property: string
};

type Api = FlexGatewayApi | Mule3Api | Mule4Api;

function getApiSpecialProperty(api: Api): string {
  if (api.technology === "flexGateway") {
    return api.flexGatewayProperty;
  }

  if (api.technology === "mule3") {
    return api.mule3Property;
  }

  return api.mule4Property;
}


// Extracting conditions to functions

// ----------- BAD -----------

function isFlexGateway(api: Api): boolean {
  return api.technology === "flexGateway";
}

function isMule3(api: Api): boolean {
  return api.technology === "mule3";
}

function isMule4(api: Api): boolean {
  return api.technology === "mule4";
}

function getApiSpecialProperty3(api: Api): string {
  if (isFlexGateway(api)) {
    return api.flexGatewayProperty;
  }

  if (isMule3(api)) {
    return api.mule3Property;
  }

  return api.mule4Property;
}


// ----------- GOOD -----------

function isFlexGatewayTwo(api: Api): api is FlexGatewayApi {
  return api.technology === "flexGateway";
}

function isMule3Two(api: Api): api is Mule3Api {
  return api.technology === "mule3";
}

function isMule4Two(api: Api): api is Mule4Api {
  return api.technology === "mule4";
}

function getApiSpecialPropertyFour(api: Api): string {
  if (isFlexGatewayTwo(api)) {
    return api.flexGatewayProperty;
  }

  if (isMule3Two(api)) {
    return api.mule3Property;
  }

  return api.mule4Property;
}

function getApiSpecialPropertyFive(api: Api): string {
  if (isFlexGatewayTwo(api)) {
    return api.flexGatewayProperty;
  }

  if (isMule3Two(api)) {
    return api.mule3Property;
  }

  if (isMule4Two(api)) {
    return api.mule4Property;
  }
}

// Union types

// ----------- BAD -----------

type ID = Pick<Api, "id">;


// ----------- Good -----------
function patch(api: Partial<Api>) {
  
}
