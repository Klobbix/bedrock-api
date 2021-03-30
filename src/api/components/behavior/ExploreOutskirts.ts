/**
 * Allows a mob to explore the outskirts of a village.
 */
declare interface ExploreOutskirts {

	/**
	 *  The distance in which the mob will proceed past the village bounds.
	 *  @default 5.0
	 */
	explore_dist: number;

	/**
	 * Movement speed multiplier of the mob when using this AI Goal.
	 * @default 1.0
	 */
	speed_multiplier: number;


	/**
	 *  The time the mob will stand around 'searching' for POIs.
	 *  @default 0
	 */
	wait_time: number;
}
