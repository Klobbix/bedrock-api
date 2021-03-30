/**
 * Can only be used by Villagers. Allows them to seek shelter indoors.
 */
declare interface MoveIndoors {

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
