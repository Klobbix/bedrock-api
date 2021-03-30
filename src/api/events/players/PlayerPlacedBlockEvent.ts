/**
 * This event is triggered whenever a player places a block.
 */
declare interface PlayerPlacedBlockEvent {
	/**
	 * The position of the block that was placed
	 */
	block_position: Vector;
	/**
	 * The player that placed the block
	 */
	player: Entity;
}
