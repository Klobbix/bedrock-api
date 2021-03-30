/**
 * Allows the mob to look at a player that is holding a tradeable item.
 */
declare interface TradeInterest {

	/**
	 * The max time in seconds that the trader will hold an item before attempting to switch for a different item that takes the same trade.
	 * @default 2.0
	 */
	carried_item_switch_time: number;

	/**
	 * The time in seconds before the trader can use this goal again.
	 * @default 2.0
	 */
	cooldown: number;

	/**
	 *  The max time in seconds that the trader will be interested with showing it's trade items.
	 *  @default 45.0
	 */
	interest_time: number;

	/**
	 * The max time in seconds that the trader will wait when you no longer have items to trade.
	 * @default 1.0
	 */
	remove_item_time: number;

	/**
	 * Distance in blocks this mob can be interested by a player holding an item they like.
	 * @default 0.0
	 */
	within_radius: number;
}
