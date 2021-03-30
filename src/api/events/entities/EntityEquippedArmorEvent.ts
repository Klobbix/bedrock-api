/**
 * This event is triggered whenever an entity equips an item in their armor slots.
 */
declare interface EntityEquippedArmorEvent {
	/**
	 * The entity who is equipping the armor
	 */
	entity: Entity;
	/**
	 * The armor that is being equipped
	 */
	item_stack: ItemStack;
	/**
	 * Defines which slot the item was equipped to.
	 */
	slot: string;
}
