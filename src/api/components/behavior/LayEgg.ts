/**
 * Allows the mob to lay an egg block on a sand block if the mob is pregnant.
 */
declare interface LayEgg {

	/**
	 * Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot.
	 * @default 0.5
	 */
	goal_radius: number;

	/**
	 *  Event to run when this mob lays the egg.
	 */
	on_lay: string;

	/**
	 * The number of blocks each tick that the mob will check within it's search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick.
	 * @default 10
	 */
	search_count: number;

	/**
	 *  Height in blocks the mob will look for sand block to move towards.
	 *  @default 1
	 */
	search_height: number;

	/**
	 * The distance in blocks it will look for a sand block to move towards.
	 * @default 0
	 */
	search_range: number;

	/**
	 * Movement speed multiplier of the mob when using this AI Goal.
	 * @default 1.0
	 */
	speed_multiplier: number;
}
