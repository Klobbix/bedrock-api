/**
 * Allows Guardians, Iron Golems and Villagers to move within their pre-defined area that the mob should be restricted to.
 * Other mobs don't have a restriction defined.
 */
declare interface MoveTowardsRestriction {

	/**
	 * Movement speed multiplier of the mob when using this AI Goal.
	 * @default 1.0
	 */
	speed_multiplier: number;
}
