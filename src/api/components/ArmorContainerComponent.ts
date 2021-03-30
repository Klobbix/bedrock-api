/**
 * This component represents the armor contents of an entity. The component contains an array of ItemStack JS API Objects representing each slot in the armor container.
 * NOTE: Currently items and containers are read-only. Slots are ordered from head to feet.
 */
declare type ArmorContainerComponent = ItemStack[];
