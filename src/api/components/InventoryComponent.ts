/**
 * Defines the entity's inventory (size, restrictions, etc.). Currently this does not allow changing the entity's inventory contents.
 */
declare interface InventoryComponent {
	/**
	 * Number of slots that this entity can gain per extra strength
	 * @default 0
	 */
	additional_slots_per_strength: number;
	/**
	 * If true, the contents of this inventory can be removed by a hopper
	 * @default false
	 */
	can_be_siphoned_from: boolean;
	/**
	 * Type of container this entity has. Can be horse, minecart_chest, minecart_hopper, inventory, container or hopper
	 * @default none
	 */
	container_type: string;
	/**
	 * Number of slots the container has
	 * @default 5
	 */
	inventory_size: number;
	/**
	 * If true, only the entity can access the inventory
	 * @default false
	 */
	private: boolean;
	/**
	 * If true, the entity's inventory can only be accessed by its owner or itself
	 * @default false
	 */
	restrict_to_owner: boolean;
}
