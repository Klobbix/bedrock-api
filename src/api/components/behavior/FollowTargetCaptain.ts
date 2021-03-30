/**
 * Allows mob to move towards its current target captain.
 */
declare interface FollowTargetCaptain {

	/**
	 *  Defines the distance in blocks the mob will stay from its target while following.
	 *  @default 0.0
	 */
	follow_distance: number;

	/**
	 * Defines the maximum distance in blocks a mob can get from its target captain before giving up trying to follow it.
	 * @default 0.0
	 */
	within_radius: number;
}
