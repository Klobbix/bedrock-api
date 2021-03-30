/**
 * Allows the mob to seek shade.
 */
declare interface FindCover {

	/**
	 * Time in seconds the mob has to wait before using the goal again.
	 * @default 0
	 */
	cooldown_time: number;

	/**
	 *  Movement speed multiplier of the mob when using this AI Goal.
	 *  @default 1.0
	 */
	speed_multiplier: number;
}
