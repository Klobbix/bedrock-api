/**
 * Allows a mob with the hide component to attempt to move to - and hide at - an owned or nearby POI.
 */
declare interface Hide {
	/**
	 * Amount of time in seconds that the mob reacts.
	 * @default 1.0
	 */
	duration: number;

	/**
	 *  Defines what POI type to hide at.
	 */
	poi_type: string;

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
