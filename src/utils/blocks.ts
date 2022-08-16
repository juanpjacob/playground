import { NotificationBlock } from "../types/notificationBlocks";

export const block1: NotificationBlock = {
	type: "section",
	text: {
		type: "text",
		text: "Some random text",
	},
};

export const block2 = {
	type: "section",
	text: {
		type: "text",
		text: "Some random text",
	},
};

export const block3: NotificationBlock = {
	type: "section",
	text: "Some random text",
};

export const block4: NotificationBlock = {
	type: "section",
	text: "Some random text",
	fields: [
		{ type: "section", text: "Some random text" },
		{ type: "section", text: "Some random text" },
	],
};
