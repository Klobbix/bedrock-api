/**
 * Allows the mob to take a load off and snack on food that it found nearby.
 */
declare interface Snacking {

	/**
	 *  Items that we are interested in snacking on.
	 */
	items: string[];

	/**
	 * The cooldown time in seconds before the mob is able to snack again.
	 * @default 7.5
	 */
	snacking_cooldown: number;

	/**
	 * The minimum time in seconds before the mob is able to snack again.
	 * @default 0.5f
	 */
	snacking_cooldown_min: number;

	/**
	 * This is the chance that the mob will stop snacking, from 0 to 1.
	 * @default 0.0017
	 */
	snacking_stop_chance: number;
}
