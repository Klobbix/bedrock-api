/**
 * Allows this mob to stomp turtle eggs.
 */
declare interface StompTurtleEgg {
	/**
	 *  Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot.
	 *  @default 0.5
	 */
	goal_radius: number;

	/**
	 * A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal.
	 * @default 120
	 */
	interval: number;

	/**
	 *  The number of blocks each tick that the mob will check within it's search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick.
	 *  @default 10
	 */
	search_count: number;

	/**
	 *  Height in blocks the mob will look for turtle eggs to move towards.
	 *  @default 1
	 */
	search_height: number;

	/**
	 * The distance in blocks it will look for turtle eggs to move towards.
	 * @default 0
	 */
	search_range: number;

	/**
	 * 	Movement speed multiplier of the mob when using this AI Goal.
	 * 	@default 1.0
	 */
	speed_multiplier: number;
}
