/**
 * This event is triggered whenever an entity uses an item.
 */
declare interface EntityUseItemEvent {
	/**
	 * The entity who is using the item
	 */
	entity: Entity;
	/**
	 * The item that is being used
	 */
	item_stack: ItemStack;
	/**
	 * The way the entity used the item
	 */
	use_method: string;
}
