import fastify from "fastify";

import { User } from "./entities/user";
import { add } from "./utils/math";
import { echoHandler } from "./handlers/echo";
import { notificationHandler } from "./handlers/notification";

import "./utils/promises";

const user = new User("JP", "29");
console.log(user.getInfo());
console.log(add(3, 2));

// fastify app

const app = fastify();

app.get("/health", (_, reply) => {
	reply.send("OK");
});
app.get("/echo", echoHandler);
app.get("/notification", notificationHandler);

app.listen({ port: 3000 }, (err) => {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	console.log("Server running");
});
