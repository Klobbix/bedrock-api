/**
 * Allows mobs that own a bed in a village to move to and sleep in it.
 */
declare interface Sleep {

	/**
	 * Time in seconds the mob has to wait before using the goal again.
	 * @default 0.0
	 */
	cooldown_time: number;

	/**
	 * The height of the mob's collider while sleeping.
	 * @default 1.0
	 */
	sleep_collider_height: number;

	/**
	 * The width of the mob's collider while sleeping.
	 * @default 1.0
	 */
	sleep_collider_width: number;

	/**
	 *  The y offset of the mob's collider while sleeping.
	 *  @default 1.0
	 */
	sleep_y_offset: number;

	/**
	 * Movement speed multiplier of the mob when using this AI Goal.
	 * @default 1.0
	 */
	speed_multiplier: number;

	/**
	 * The cooldown time in seconds before the goal can be reused after a internal failure or timeout condition.
	 * @default 8.0
	 */
	timeout_cooldown: number;
}
