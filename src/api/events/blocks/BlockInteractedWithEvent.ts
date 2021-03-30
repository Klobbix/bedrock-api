/**
 * This event is triggered whenever a player interacts with a block.
 */
declare interface BlockInteractedWithEvent {
	/**
	 * The position of the block that is being interacted with
	 */
	block_position: Vector;
	/**
	 * The player that interacted with the block
	 */
	player: Entity;
}
