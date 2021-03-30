import { Levelled } from "./data/Levelled";

export class Lava implements Levelled {
	/**
	 * 0: Lava source block.
	 * 1-7:  The distance from a lava source or a falling lava. In the End and Overworld, only 2, 4 and 6 are used.
	 * 8-15: Falling lava. This level is equal to the falling lava above, and if it's non-falling, equal to 8 plus the level of the non-falling lava above it.
	 */
	liquid_depth: number = 0;
}
