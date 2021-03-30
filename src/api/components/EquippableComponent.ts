/**
 * Defines how many and what items the entity can be equipped with.
 */
declare interface EquippableComponent {
	/**
	 * List of slots and the item that can be equipped.
	 */
	slots: {
		/**
		 * The list of items that can go in this slot.
		 */
		accepted_items: string[];
		/**
		 * Text to be displayed when the entity can be equipped with this item when playing with Touch-screen controls.
		 */
		interact_text: string;
		/**
		 * Event to trigger when this entity is equipped with this item.
		 */
		on_equip: Trigger | string;
		/**
		 * Event to trigger when this item is removed from this entity.
		 */
		on_unequip: Trigger | string;
		/**
		 * The slot number of this slot.
		 */
		slot: number;
	}[];
}
