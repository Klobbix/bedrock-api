/**
 * Defines the loot table the entity uses to defines its equipment.
 * Once the changes are applied, the equipment is re-rolled and a new set of equipment is chosen for the entity.
 */
declare interface EquipmentComponent {
	/**
	 * A list of slots with the chance to drop an equipped item from that slot
	 */
	slot_drop_chance: {
		/**
		 * The chance that the item in this slot will be dropped
		 */
		drop_chance: number;
		/**
		 * The slot number
		 */
		slot: number;
	}[];
	/**
	 * The file path to the equipment table, relative to the behavior pack's root
	 */
	table: string;
}
