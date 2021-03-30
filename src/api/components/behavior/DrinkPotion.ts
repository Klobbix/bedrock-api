/**
 * Allows the mob to drink potions based on specified environment conditions.
 */
declare interface DrinkPotion {

	/**
	 * Not provided.
	 */
	speed_modifier: number;

	/**
	 * A list of potions that this entity can drink. Each potion entry has the following parameters:
	 */
	potions: {
		/**
		 * The percent chance (from 0.0 to 1.0) of this potion being selected when searching for a potion to use.
		 * @default 1.0
		 */
		chance: number;
		/**
		 * The filters to use when determining if this potion can be selected.
		 */
		filters: Filter;
		/**
		 *  The registry ID of the potion to use.
		 *  @default -1
		 */
		id: number;
	}[];
}
