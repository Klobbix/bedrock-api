/**
 * Allows the mob to eat/raid crops out of farms until they are full.
 */
declare interface RaidGarden {

	/**
	 * Blocks that the mob is looking for to eat/raid.
	 */
	blocks: string[];

	/**
	 * Time in seconds between each time it eats/raids.
	 * @default 2
	 */
	eat_delay: number;

	/**
	 * Amount of time in seconds before this mob wants to eat/raid again after eating its maximum.
	 * @default 100
	 */
	full_delay: number;

	/**
	 *  Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot.
	 *  @default 0.5
	 */
	goal_radius: number;

	/**
	 *  Time in seconds before starting to eat/raid once it arrives at it.
	 *  @default 0
	 */
	initial_eat_delay: number;

	/**
	 * Maximum number of crops this entity wants to eat/raid. If set to zero or less then it doesn't have a maximum.
	 * @default 6
	 */
	max_to_eat: number;

	/**
	 * Distance in blocks the mob will look for crops to eat.
	 * @default 0
	 */
	search_range: number;

	/**
	 * Movement speed multiplier of the mob when using this AI Goal.
	 * @default 1.0
	 */
	speed_multiplier: number;
}
