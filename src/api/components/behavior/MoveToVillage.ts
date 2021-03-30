/**
 * Allows the mob to move into a random location within a village.
 */
declare interface MoveToVillage {

	/**
	 * Time in seconds the mob has to wait before using the goal again.
	 * @default 0.0
	 */
	cooldown_time: number;

	/**
	 * Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot.
	 * @default 0.5
	 */
	goal_radius: number;

	/**
	 * The distance in blocks to search for villages. If <= 0, find the closest village regardless of distance.
	 * @default 0
	 */
	search_range: number;

	/**
	 *  Movement speed multiplier of the mob when using this AI Goal.
	 *  @default 1.0
	 */
	speed_multiplier: number;
}
