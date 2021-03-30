/**
 * Allows mob to move towards a random block.
 */
declare interface MoveToRandomBlock {

	/**
	 * Defines the distance from the mob, in blocks, that the block to move to will be chosen.
	 * @default 16.0
	 */
	block_distance: number;

	/**
	 * Defines the distance in blocks the mob has to be from the block for the movement to be finished.
	 * @default 0.0
	 */
	within_radius: number;
}
