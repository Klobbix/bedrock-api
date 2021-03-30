/**
 * This event is triggered whenever a block is destroyed by an explosion.
 */
declare interface BlockExplodedEvent {
	/**
	 * The identifier of the block that was destroyed
	 */
	block_identifier: string;

	/**
	 * The position of the block that was destroyed by the explosion
	 */
	block_position: Vector;

	/**
	 * The cause of the block's destruction
	 */
	cause: string;

	/**
	 * The entity that exploded
	 */
	entity: Entity;
}
