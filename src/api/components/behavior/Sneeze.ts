/**
 * Allows the mob to stop and sneeze possibly startling nearby mobs and dropping an item.
 */
declare interface Sneeze {

	/**
	 * Time in seconds the mob has to wait before using the goal again.
	 * @default 0.0
	 */
	cooldown_time: number;

	/**
	 * The probability that the mob will drop an item when it sneezes.
	 * @default 1.0
	 */
	drop_item_chance: number;


	/**
	 *  List of entity types this mob will startle (cause to jump) when it sneezes.
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
	 *  Loot table to select dropped items from.
	 */
	loot_table: string;

	/**
	 * Sound to play when the sneeze is about to happen.
	 */
	prepare_sound: string;

	/**
	 * The time in seconds that the mob takes to prepare to sneeze (while the prepare_sound is playing).
	 * @default 1.0
	 */
	prepare_time: number;

	/**
	 *  The probability of sneezing. A value of 1.00 is 100%.
	 *  @default 0.02
	 */
	probability: number;

	/**
	 *  Sound to play when the sneeze occurs.
	 */
	sound: string;

	/**
	 * Distance in blocks that mobs will be startled.
	 * @default 0.0
	 */
	within_radius: number;
}
