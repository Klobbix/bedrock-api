/**
 * This event is triggered whenever an entity acquires an item.
 */
declare interface EntityAcquiredItemEvent {
	/**
	 * The total number of items acquired by the entity during this event
	 */
	acquired_amount: number;
	/**
	 * The way the entity acquired the item
	 */
	acquisition_method: string;
	/**
	 * The entity who acquired the item
	 */
	entity: Entity;
	/**
	 * The item that was acquired
	 */
	item_stack: ItemStack;
	/**
	 * If it exists, the entity that affected the item before it was acquired. Example: A player completes a trade with a villager. The `entity` property would be the player and the `secondary_entity` would be the villager
	 */
	secondary_entity: Entity;
}
