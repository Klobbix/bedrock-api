/**
 * This event is triggered whenever an entity drops an item.
 */
declare interface EntityDroppedItemEvent {
	/**
	 * The entity who dropped the item
	 */
	entity: Entity;
	/**
	 * The item that was dropped
	 */
	item_stack: ItemStack;
}
