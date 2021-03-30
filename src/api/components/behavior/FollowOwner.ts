/**
 * Allows the mob to follow the player that owns them.
 */
declare interface FollowOwner {

	/**
	 * Movement speed multiplier of the mob when using this AI Goal.
	 * @default 1.0
	 */
	speed_multiplier: number;

	/**
	 * The distance in blocks that the owner can be away from this mob before it starts following it.
	 * @default 10.0
	 */
	start_distance: number;

	/**
	 * The distance in blocks this mob will stop from its owner while following it.
	 * @default 2.0
	 */
	stop_distance: number;

}
