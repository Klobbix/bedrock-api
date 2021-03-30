/**
 * This event is triggered whenever an entity changes the item carried in their hand.
 */
declare interface EntityCarriedItemChangedEvent {
	/**
	 * The item that is now in the entities hands
	 */
	carried_item: ItemStack;
	/**
	 * The entity that changed what they were carrying
	 */
	entity: Entity;
	/**
	 * Defines which hand the item was equipped to. Either main or offhand.
	 */
	hand: string;
	/**
	 * The item that was previously in the entities hands
	 */
	previous_carried_item: ItemStack;
}
