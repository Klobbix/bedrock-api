export interface Levelled {

	/**
	 * 0 - Liquid Source block.
	 * 1 - 7
	 * The distance from a source or falling liquid block.
	 * 8 - 15
	 * Falling liquid. This level is equal to the falling liquid above, and if it's non-falling, equal to 8 plus the level of the non-falling liquid above it.
	 */
	liquid_depth: number;
}
