/**
 * Allows mobs to occasionally stop and take a nap under certain conditions.
 */
declare interface Nap {

	/**
	 * Maximum time in seconds the mob has to wait before using the goal again.
	 * @default 0.0
	 */
	cooldown_max: number;

	/**
	 *  Minimum time in seconds the mob has to wait before using the goal again.
	 *  @default 0.0
	 */
	cooldown_min: number;

	/**
	 * The block distance in x and z that will be checked for mobs that this mob detects.
	 * @default 6.0
	 */
	mob_detect_dist: number;

	/**
	 * The block distance in y that will be checked for mobs that this mob detects.
	 * @default 6.0
	 */
	mob_detect_height: number;
}
