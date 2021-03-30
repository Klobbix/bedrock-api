/**
 * This event is triggered whenever a player starts to destroy a block.
 */
declare interface BlockDestructionStartedEvent {
	/**
	 * The position of the block that is being destroyed
	 */
	block_position: Vector;
	/**
	 * The player that started destoying the block
	 */
	player: Entity;
}
