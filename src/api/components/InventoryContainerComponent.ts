/**
 * This component represents the inventory contents of an entity. The component contains an array of ItemStack JS API Objects representing each slot in the inventory.
 * NOTE: Currently items and containers are read-only.Slot 0-8 is the hotbar, 9-16 is the top row of the player's inventory, 17-24 is the middle row, 25-32 is the bottom row
 */
declare type InventoryContainerComponent = ItemStack[];
