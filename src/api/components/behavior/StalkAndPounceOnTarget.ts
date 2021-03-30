/**
 * Allows a mob to stalk a target, then once within range pounce onto a target, on success the target will be attacked dealing damage defined by the attack component.
 * On failure, the mob will risk getting stuck.
 */
declare interface StalkAndPounceOnTarget {

	/**
	 * The amount of time the mob will be interested before pouncing. This happens when the mob is within range of pouncing.
	 * @default 2.0
	 */
	interest_time: number;

	/**
	 * The distance in blocks the mob jumps in the direction of its target.
	 * @default 0.8
	 */
	leap_distance: number;

	/**
	 * The height in blocks the mob jumps when leaping at its target.
	 * @default 0.9
	 */
	leap_height: number;

	/**
	 * The maximum distance away a target can be before the mob gives up on stalking.
	 * @default 10.0
	 */
	max_stalk_dist: number;

	/**
	 * The maximum distance away from the target in blocks to begin pouncing at the target.
	 * @default 5.0
	 */
	pounce_max_dist: number;

	/**
	 * The movement speed in which you stalk your target.
	 * @default 1.2
	 */
	stalk_speed: number;

	/**
	 * The max distance away from the target when landing from the pounce that will still result in damaging the target.
	 * @default 2.0
	 */
	strike_dist: number;

	/**
	 * The amount of time the mob will be stuck if they fail and land on a block they can be stuck on.
	 * @default 2.0
	 */
	stuck_time: number;
}
