/**
 * Adds a rider to the entity. Requires minecraft:rideable.
 */
declare interface AddRiderComponent {
	/**
	 * The entity type that will be riding this entity.
	 */
	entity_type: string;

	/**
	 * The spawn event that will be used when the riding entity is created.
	 */
	spawn_event: string;
}
