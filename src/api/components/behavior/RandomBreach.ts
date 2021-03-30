/**
 * Allows the mob to randomly break surface of the water.
 */
declare interface RandomBreach {

	/**
	 * Time in seconds the mob has to wait before using the goal again.
	 * @default 0.0
	 */
	cooldown_time: number;

	/**
	 * A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal.
	 * @default 120
	 */
	interval: number;

	/**
	 *  Movement speed multiplier of the mob when using this AI Goal.
	 *  @default 1.0
	 */
	speed_multiplier: number;

	/**
	 *  Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1.
	 *  @default 10
	 */
	xz_dist: number;

	/**
	 * Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1.
	 * @default 7
	 */
	y_dist: number;
}
