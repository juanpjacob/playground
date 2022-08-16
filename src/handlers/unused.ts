import { FastifyReply, FastifyRequest } from "fastify";

export function unusedHandler(request: FastifyRequest, reply: FastifyReply) {
	reply.send({ prop: "foo" });
}
