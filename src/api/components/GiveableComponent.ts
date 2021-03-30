/**
 * Defines sets of items that can be used to trigger events when used on this entity. The item will also be taken and placed in the entity's inventory.
 */
declare interface GiveableComponent {

	/**
	 * An optional cool down in seconds to prevent spamming interactions.
	 * @default 0.0
	 */
	cooldown: number;

	/**
	 * The list of items that can be given to the entity to place in their inventory.
	 */
	items: string[];

	/**
	 * Event to fire when the correct item is given.
	 */
	on_give: string;
}
