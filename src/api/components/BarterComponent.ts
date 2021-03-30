/**
 * Enables the component to drop an item as a barter exchange.
 */
declare interface BarterComponent {

	/**
	 * Loot table that's used to drop a random item.
	 */
	barter_table: string;

	/**
	 * Duration, in seconds, for which mob won't barter items if it was hurt.
	 * @default 0
	 */
	cooldown_after_being_attacked: number;
}
