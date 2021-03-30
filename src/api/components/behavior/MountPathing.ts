/**
 * Allows the mob to move around on its own while mounted seeking a target to attack.
 */
declare interface MountPathing {

	/**
	 * Movement speed multiplier of the mob when using this AI Goal.
	 * @default 1.0
	 */
	speed_multiplier: number;

	/**
	 * The distance at which this mob wants to be away from its target.
	 * @default 0.0
	 */
	target_dist: number;

	/**
	 *  If true, this mob will chase after the target as long as it's a valid target.
	 *  @default false
	 */
	track_target: boolean;
}
