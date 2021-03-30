/**
 * This event is triggered whenever a player stops destroying a block.
 */
declare interface BlockDestructionStoppedEvent {
	/**
	 * The position of the block that was being destroyed
	 */
	block_position: Vector;
	/**
	 * How far along the destruction was before it was stopped (0 - 1 range)
	 */
	destruction_progress: number;
	/**
	 * The player that stopped destroying the block
	 */
	player: Entity;
}
