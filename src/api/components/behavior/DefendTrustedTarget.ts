/**
 * Allows the mob to target another mob that hurts an entity it trusts.
 */
declare interface DefendTrustedTarget {

	/**
	 *  Sound to occasionally play while defending.
	 */
	aggro_sound: string;

	/**
	 * Time in seconds between attacks.
	 * @default 0
	 */
	attack_interval: number;

	/**
	 * List of entity types that this mob considers valid targets.
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
	 *  If true, only entities in this mob's viewing range can be selected as targets.
	 *  @default false
	 */
	must_see: boolean;

	/**
	 * Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more.
	 * @default 3.0
	 */
	must_see_forget_duration: number;

	/**
	 * Distance in blocks that the target can be within to launch an attack.
	 * @default 0.0
	 */
	within_radius: number;
}
