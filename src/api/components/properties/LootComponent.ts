/**
 * Sets the loot table for what items this entity drops upon death.
 */
declare interface LootComponent {
	/**
	 * The path to the loot table, relative to the Behavior Pack's root.
	 */
	table: string;
}
