/**
 * Allows the mob to move to a POI if able to.
 */
declare interface MoveToPOI {

	/**
	 * Tells the goal what POI type it should be looking for.
	 */
	poi_type: string;

	/**
	 * Movement speed multiplier of the mob when using this AI Goal.
	 * @default 1.0
	 */
	speed_multiplier: number;

}
