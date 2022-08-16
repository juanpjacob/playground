import { block1 } from "./blocks";

// const a = 3;

describe("blocks", () => {
	describe("block1", () => {
		it("should export a block", () => {
			expect(block1).toEqual({
				type: "section",
				text: {
					type: "text",
					text: "Some random text",
				},
			});
		});
	});
});
