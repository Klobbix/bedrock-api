/**
 * Defines how the entity can be healed by the player.
 * This doesn't control how much health the entity can have; you must use the Health component for that instead.
 */
declare interface HealableComponent {
	/**
	 * The filter group that defines the conditions for this trigger
	 */
	filters?: Filter;
	/**
	 * Determines if item can be used regardless of entity being at full health
	 * @default false
	 */
	force_use: boolean;
	/**
	 * The array of items that can be used to heal this entity
	 */
	items: {
		/**
		 * The amount of health this entity gains when fed this item
		 * @default 1
		 */
		heal_amount: number;
		/**
		 * Item identifier that can be used to heal this entity
		 */
		item: string;
	}[];
}
