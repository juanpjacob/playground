import { FastifyReply, FastifyRequest } from "fastify";

export function echoHandler(request: FastifyRequest, reply: FastifyReply) {
	const body = request.body;
	reply.send(body ?? { content: null });
}
