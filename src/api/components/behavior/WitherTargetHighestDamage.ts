/**
 * Allows the wither to focus its attacks on whichever mob has dealt the most damage to it.
 */
declare interface WitherTargetHighestDamage {

	/**
	 * List of entity types the wither takes into account to find who dealt the most damage to it.
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
}
