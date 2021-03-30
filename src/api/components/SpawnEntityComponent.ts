/**
 * Adds a timer after which this entity will spawn another entity or item (similar to vanilla's chicken's egg-laying behavior).
 */
declare interface SpawnEntityComponent {

	/**
	 * If present, the specified entity will only spawn if the filter evaluates to true.
	 */
	filters?: Filter;

	/**
	 * Maximum amount of time to randomly wait in seconds before another entity is spawned.
	 * @default 600
	 */
	max_wait_time: number;

	/**
	 * Minimum amount of time to randomly wait in seconds before another entity is spawned.
	 * @default 300
	 */
	min_wait_time: number;

	/**
	 * The number of entities of this type to spawn each time that this triggers.
	 * @default 1
	 */
	num_to_spawn: number;

	/**
	 * If true, this the spawned entity will be leashed to the parent.
	 * @default false
	 */
	should_leash: boolean;

	/**
	 * If true, this component will only ever spawn the specified entity once.
	 * @default false
	 */
	single_use: boolean;

	/**
	 * Identifier of the entity to spawn, leave empty to spawn the item defined above instead.
	 * @default minecraft:entity_born
	 */
	spawn_entity: string;

	/**
	 * Event to call when the entity is spawned.
	 */
	spawn_event: string;

	/**
	 * Item identifier of the item to spawn.
	 * @default egg
	 */
	spawn_item: string;

	/**
	 * Method to use to spawn the entity.
	 * @default born
	 */
	spawn_method: string;

	/**
	 * Identifier of the sound effect to play when the entity is spawned.
	 * @default plop
	 */
	spawn_sound: string;
}
