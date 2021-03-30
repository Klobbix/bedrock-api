/**
 * This event is triggered whenever an entity dies.
 * This won't be triggered when an entity is removed (such as when using destroyEntity).
 * Not all of these values are present with every entity death.
 */
declare interface EntityDeathEvent {
	/**
	 * The position of the block that killed the entity
	 */
	block_position: Vector;

	/**
	 * The cause of the entity's death
	 */
	cause: string;

	/**
	 * The entity that died
	 */
	entity: Entity;

	/**
	 * The entity that killed the entity
	 */
	killer: Entity;

	/**
	 * The type of the projectile that killed the entity
	 */
	projectile_type: string;
}
