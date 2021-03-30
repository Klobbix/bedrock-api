/**
 * Allows the mob to move near a target and drop an item.
 */
declare interface DropItemFor {
	/**
	 * 	The probability that the mob will drop an item.
	 * 	@default 1.0
	 */
	drop_item_chance: number;

	/**
	 * List of entity types this mob will drop items for.
	 */
	entity_types: {
		/**
		 * Conditions that make this entry in the list valid.
		 */
		filters: Filter;
		/**
		 * Maximum distance this mob can be away to be a valid choice.
		 * @default 16
		 */
		max_dist: number;
		/**
		 * If true, the mob has to be visible to be a valid choice.
		 * @default false
		 */
		must_see: boolean;
		/**
		 * Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more.
		 * @default 3.0
		 */
		must_see_forget_duration: number;
		/**
		 * Multiplier for the running speed. A value of 1.0 means the speed is unchanged.
		 * @default 1.0
		 */
		sprint_see_multiplier: number;
		/**
		 * Multiplier for the walking speed. A value of 1.0 means the speed is unchanged.
		 * @default 1.0
		 */
		walk_speed_multiplier: number;
	};

	/**
	 *  Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot.
	 *  @default 0.5
	 */
	goal_radius: number;

	/**
	 * Loot table to select items from.
	 */
	loot_table: string;

	/**
	 * Maximum distance in blocks this mob will look for entities to drop an item for.
	 * @default 0.0
	 */
	max_dist: number;

	/**
	 * The distance in blocks the mob will try to be away from the entity when it drops the item.
	 * @default 1.0
	 */
	offering_distance: number;

	/**
	 *  Event to run when this mob attempts to drop an item.
	 */
	on_drop_attempt: string;

	/**
	 *  Height in blocks from the target the mob can be.
	 *  @default 1
	 */
	search_height: number;

	/**
	 *  The distance in blocks from the target the mob can be.
	 *  @default 0
	 */
	search_range: number;

	/**
	 * Movement speed multiplier of the mob when using this AI Goal.
	 * @default 1.0
	 */
	speed_multiplier: number;

	/**
	 * The valid times of day that this goal can be used. For reference: noon is 0.0, sunset is 0.25, midnight is 0.5, and sunrise is 0.75, and back to noon for 1.0.
	 * @default [0.0, 1.0]
	 */
	time_of_day_range: MinecraftRange;
}
