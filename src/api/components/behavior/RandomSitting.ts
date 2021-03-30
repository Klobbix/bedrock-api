/**
 * Allows the mob to randomly sit for a duration.
 */
declare interface RandomSitting {

	/**
	 * Time in seconds the mob has to wait before using the goal again.
	 * @default 0.0
	 */
	cooldown_time: number;

	/**
	 * The minimum amount of time in seconds before the mob can stand back up.
	 * @default 10
	 */
	min_sit_time: number;

	/**
	 *  This is the chance that the mob will start this goal, from 0 to 1.
	 *  @default 0.1
	 */
	start_chance: number;

	/**
	 *  This is the chance that the mob will stop this goal, from 0 to 1.
	 *  @default 0.3
	 */
	stop_chance: number;
}
