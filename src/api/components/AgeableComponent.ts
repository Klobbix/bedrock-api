/**
 * Adds a timer for the entity to grow up. It can be accelerated by giving the entity the items it likes as defined by feedItems.
 */
declare interface AgeableComponent {

	/**
	 * List of items that the entity drops when it grows up.
	 */
	drop_items: string[];

	/**
	 * Amount of time before the entity grows up, -1 for always a baby.
	 * @default 1200.0
	 */
	duration: number;

	/**
	 *  List of items that can be fed to the entity. Includes 'item' for the item name and 'growth' to define how much time it grows up by.
	 */
	feed_items: string[];

	/**
	 *  Event to run when this entity grows up.
	 */
	grow_up: string;
}
