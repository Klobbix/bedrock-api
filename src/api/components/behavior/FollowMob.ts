/**
 * Allows the mob to follow other mobs.
 */
declare interface FollowMob {

	/**
	 * The distance in blocks it will look for a mob to follow.
	 * @default 0
	 */
	search_range: number;

	/**
	 * Movement speed multiplier of the mob when using this AI Goal.
	 * @default 1.0
	 */
	speed_multiplier: number;

	/**
	 * The distance in blocks this mob stops from the mob it is following.
	 * @default 2.0
	 */
	stop_distance: number;
}
