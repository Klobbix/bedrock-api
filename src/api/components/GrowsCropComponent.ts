/**
 * Could increase crop growth when entity walks over crop.
 */
declare interface GrowsCropComponent {

	/**
	 * Value between 0-1. Chance of success per tick.
	 * @default 0
	 */
	chance: number;

	/**
	 *  Number of charges.
	 *  @default 10
	 */
	charges: number;
}
