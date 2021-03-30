/**
 * Allows the mob to attack the player by summoning other entities.
 */
declare interface SummonEntity {

	/**
	 *  List of spells for the mob to use to summon entities. Each spell has the following parameters:
	 */
	summon_choices: {
		/**
		 * Time in seconds the spell casting will take.
		 * @default Total delay of the steps
		 */
		cast_duration: number;

		/**
		 * Time in seconds the mob has to wait before using the spell again.
		 * @default 0.0
		 */
		cooldown_time: number;

		/**
		 * If true, the mob will do the casting animations and render spell particles.
		 * @default true
		 */
		do_casting: boolean;

		/**
		 * Filters.
		 */
		filters: Filter;

		/**
		 * Upper bound of the activation distance in blocks for this spell.
		 * @default -1.0
		 */
		max_activation_range: number;

		/**
		 * Lower bound of the activation distance in blocks for this spell.
		 * @default 1.0
		 */
		min_activation_range: number;

		/**
		 * The color of the particles for this spell.
		 * @default 0
		 */
		particle_color: number;

		/**
		 * List of steps for the spell. Each step has the following parameters:
		 */
		sequence: {
			/**
			 *  Amount of time in seconds to wait before this step starts.
			 *  @default 0.0
			 */
			base_delay: number;
			/**
			 *  Amount of time in seconds before each entity is summoned in this step.
			 *  @default 0.0
			 */
			delay_per_summon: number;
			/**
			 * Amount of time in seconds that the spawned entity will be alive for. A value of -1.0 means it will remain alive for as long as it can.
			 * @default -1.0
			 */
			entity_lifespan: number;
			/**
			 * The entity type of the entities we will spawn in this step.
			 */
			entity_type: string;
			/**
			 * Number of entities that will be spawned in this step.
			 * @default 1
			 */
			num_entities_spawned: number;
			/**
			 *  The base shape of this step. Valid values are circle and line.
			 *  @default line
			 */
			shape: string;
			/**
			 * The base size of the entity.
			 * @default 1.0
			 */
			size: number;
			/**
			 *  The sound event to play for this step.
			 */
			sound_event: string;
			/**
			 * Maximum number of summoned entities at any given time.
			 * @default 0
			 */
			summon_cap: number;
			/**
			 * Radius of the summoned entities.
			 * @default 0.0
			 */
			summon_cap_radius: number;
			/**
			 * The target of the spell. This is where the spell will start (line will start here, circle will be centered here).
			 * @default self
			 */
			target: string;
		}
	}[];

	/**
	 *  The sound event to play when using this spell.
	 */
	start_sound_event: string;

	/**
	 *  The weight of this spell. Controls how likely the mob is to choose this spell when casting one.
	 *  @default 0.0
	 */
	weight: number;
}
