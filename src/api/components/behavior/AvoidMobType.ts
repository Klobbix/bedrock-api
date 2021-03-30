/**
 * Allows this entity to avoid certain mob types.
 */
declare interface AvoidMobType {

	/**
	 * List of entity types this mob avoids.
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
	 *  If true, visibility between this entity and the mob type will not be checked.
	 *  @default false
	 */
	ignore_visibility: boolean;
	/**
	 * Maximum distance to look for an entity.
	 * @default 0.0
	 */
	max_dist: number;
	/**
	 * Distance in blocks within the mob considers it should stop fleeing.
	 * @default 0.5
	 */
	max_flee: number;
	/**
	 * Determines how likely it is that this entity will stop avoiding another entity based on that entity's strength.
	 * @default 1.0
	 */
	probability_per_strength: number;

	/**
	 * Multiplier for running speed. 1.0 means keep the regular speed, while higher numbers make the running speed faster.
	 * @default 1.0
	 */
	sprint_speed_multipler: number;
	/**
	 * Multiplier for walking speed. 1.0 means keep the regular speed, while higher numbers make the walking speed faster.
	 * @default 1.0
	 */
	walk_speed_multiplier: number;
}
