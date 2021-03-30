/**
 * This component represents the contents of an entity's hands. The component contains an array of ItemStack JS API Objects representing each slot in the hand container.
 * Note: Currently items and containers are read-only. Slot 0 is main-hand Slot 1 is off-hand.
 */
declare type HandContainerComponent = ItemStack[];
