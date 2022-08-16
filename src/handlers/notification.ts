import { FastifyReply, FastifyRequest } from "fastify";

import { block1, block2, block3, block4 } from "../utils/blocks";
import { TextBlock } from "../types/notificationBlocks";

export function notificationHandler(_: FastifyRequest, reply: FastifyReply) {
	console.log((block1.text as TextBlock).text);
	console.log(block2.text.text);

	reply.send({ block1, block2, block3, block4 });
}
