import { ServerScript } from "../ServerScript";
import { ClientScript } from "../ClientScript";

export class BlockHelper {

	constructor(private script: ServerScript | ClientScript) {
	}

	/**
	 * Returns the block at a given position.
	 * @param area The ticking area
	 * @param position The block position
	 * @see EntityHelper.ts for access to an entity's current ticking area
	 */
	getBlock(area: TickingArea, position: Vector): Block {
		return this.script.system().getBlock(area, position);
	}

	/**
	 * Returns the blocks between a min and max position.
	 * @param area The ticking area
	 * @param min The minimum position
	 * @param max The maximum position
	 */
	getBlocks(area: TickingArea, min: Vector, max: Vector): Block[][][] {
		return this.script.system().getBlocks(area, min, max);
	}
}
