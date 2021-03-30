/**
 * Allows the mob to move towards the nearest underwater ruin or shipwreck.
 */
declare interface FindUnderwaterTreasure {

	/**
	 * The range that the mob will search for a treasure chest within a ruin or shipwreck to move towards.
	 * @default 0
	 */
	search_range: number;

	/**
	 *  Movement speed multiplier of the mob when using this AI Goal.
	 *  @default 1.0
	 */
	speed_multiplier: number;

	/**
	 * The distance the mob will move before stopping.
	 * @default 2.0
	 */
	stop_distance: number;
}
