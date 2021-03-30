/**
 * This event is triggered whenever a piston moves a block.
 */
declare interface PistonMovedBlockEvent {
	/**
	 * The position of the block that was moved
	 */
	block_position: Vector;
	/**
	 * The action the piston took, "extended" or "retracted"
	 */
	piston_action: string;
	/**
	 * The position of the piston that moved the block
	 */
	piston_position: Vector;
}
