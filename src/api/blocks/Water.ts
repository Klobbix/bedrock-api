import { Levelled } from "./data/Levelled";

export class Water implements Levelled {
	/**
	 * 0 - Water source block.
	 * 1 - 7
	 * The distance from a water source or falling water block.
	 * 8 - 15
	 * Falling water. This level is equal to the falling water above, and if it's non-falling, equal to 8 plus the level of the non-falling water above it.
	 */
	liquid_depth: number = 0;
}
