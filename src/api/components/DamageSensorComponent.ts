/**
 * Defines what events to call when this entity is damaged by specific entities or items.
 */
declare interface DamageSensorComponent {
	triggers: {
		/**
		 * Type of damage that triggers the events.
		 */
		cause: string;

		/**
		 * A multiplier that modifies the base damage from the damage cause. If deals_damage is true the multiplier can only reduce the damage the entity will take to a minimum of 1.
		 * @default 1.0
		 */
		damage_multiplier: number;

		/**
		 * If true, the damage dealt to the entity will take away health from it, set to false to make the entity ignore that damage
		 * @default true
		 */
		deals_damage: boolean;

		/**
		 * List of triggers with the events to call when taking this specific kind of damage, allows specifying filters for entity definitions and events
		 */
		on_damage: Trigger[];

		/**
		 * Defines what sound to play, if any, when the on_damage filters are met.
		 */
		on_damage_sound_event: string;
	}[];

}
