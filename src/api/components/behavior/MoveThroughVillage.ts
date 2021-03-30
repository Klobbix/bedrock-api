/**
 * Can only be used by Villagers. Allows the villagers to create paths around the village.
 */
declare interface MoveThroughVillage {

	/**
	 * If true, the mob will only move through the village during night time.
	 * @default false
	 */
	only_at_night: boolean;

	/**
	 *  Movement speed multiplier of the mob when using this AI Goal.
	 *  @default 1.0
	 */
	speed_multiplier: number;
}
