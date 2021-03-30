/**
 * This event is triggered whenever a player destroys a block.
 */
declare interface PlayerDestroyedBlockEvent {
	/**
	 * The identifier of the block that was destroyed
	 */
	block_identifier: string;
	/**
	 * The position of the block that was destroyed
	 */
	block_position: Vector;
	/**
	 * The player that destroyed the block
	 */
	player: Entity;
}
