/**
 * Defines the conditions and behavior of a rideable entity's boost.
 */
declare interface BoostableComponent {

	/**
	 * List of items that can be used to boost while riding this entity. Each item has the following properties:
	 */
	boost_items: [{ damage: number, item: string, replace_item: string }];

	/**
	 * Time in seconds for the boost.
	 * @default 3.0
	 */
	duration: number;

	/**
	 * Factor by which the entity's normal speed increases. E.g. 2.0 means go twice as fast.
	 * @default 1
	 */
	speed_multiplier: number;
}
