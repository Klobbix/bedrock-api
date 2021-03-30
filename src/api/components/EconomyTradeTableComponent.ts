/**
 * Defines this entity's ability to trade with players.
 */
declare interface EconomyTradeTableComponent {

	/**
	 * Determines when the mob transforms, if the trades should be converted when the new mob has a economy_trade_table. When the trades are converted, the mob will generate a new trade list with their new trade table, but then it will try to convert any of the same trades over to have the same enchantments and user data. For example, if the original has a Emerald to Enchanted Iron Sword (Sharpness 1), and the new trade also has an Emerald for Enchanted Iron Sword, then the enchantment will be Sharpness 1.
	 */
	convert_trades_economy: boolean;

	/**
	 * How much should Demand be modified by when the player has cured the Zombie Villager. Can be specified as a pair of numbers (low-tier trade discount and high-tier trade discount).
	 * @default [-5,20]
	 */
	cured_discount: MinecraftRange;

	/**
	 * Name to be displayed while trading with this entity.
	 */
	display_name: string;

	/**
	 * How much should Demand be modified by when the player has the Hero of the Village mob effect.
	 * @default -4
	 */
	hero_demand_discount: number;

	/**
	 * The max Demand should be modified by when the player has cured the Zombie Villager. Can be specified as a pair of numbers (low-tier trade discount and high-tier trade discount).
	 * @default [-25, -63]
	 */
	max_cured_discount: MinecraftRange;

	/**
	 * How much should Demand be modified by when the player has cured a nearby Zombie Villager.
	 * @default -25
	 */
	nearby_cured_discount: number;

	/**
	 * Used to determine if trading with entity opens the new trade screen.
	 * @default false
	 */
	new_screen: boolean;

	/**
	 *  Determines if the trades should persist when the mob transforms. This makes it so that the next time the mob is transformed to something with a trade_table or economy_trade_table, then it keeps their trades.
	 *  @default false
	 */
	persist_trades: boolean;

	/**
	 * Show an in game trade screen when interacting with the mob.
	 * @default true
	 */
	show_trade_screen: boolean;

	/**
	 * File path relative to the resource pack root for this entity's trades.
	 */
	table: string;
}
