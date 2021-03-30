/**
 * Defines this entity's ability to trade with players.
 */
declare interface TradeTableComponent {

	/**
	 *  Determines when the mob transforms, if the trades should be converted when the new mob has a economy_trade_table. When the trades are converted, the mob will generate a new trade list with their new trade table, but then it will try to convert any of the same trades over to have the same enchantments and user data. For example, if the original has a Emerald to Enchanted Iron Sword (Sharpness 1), and the new trade also has an Emerald for Enchanted Iron Sword, then the enchantment will be Sharpness 1.
	 * @default false
	 */
	convert_trades_economy: boolean;

	/**
	 * Name to be displayed while trading with this entity.
	 */
	display_name: string;

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
	 * File path relative to the behavior pack root for this entity's trades.
	 */
	table: string;
}
