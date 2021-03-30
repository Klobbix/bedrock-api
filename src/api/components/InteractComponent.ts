/**
 * Defines interactions with this entity.
 */
declare interface InteractComponent {

	/**
	 * Loot table with items to add to the player's inventory upon successful interaction.
	 */
	add_items: {
		/**
		 * File path, relative to the behavior pack's path, to the loot table file.
		 */
		table: string;
	};
	/**
	 * Time in seconds before this entity can be interacted with again.
	 * @default 0
	 */
	cooldown: number;
	/**
	 * Time in seconds before this entity can be interacted with after being attacked.
	 * @default 0
	 */
	cooldown_after_being_attacked: number;
	/**
	 * The amount of damage the item will take when used to interact with this entity. A value of 0 means the item won't lose durability.
	 * @default 0
	 */
	hurt_item: number;
	/**
	 * Text to show when the player is able to interact in this way with this entity when playing with Touch-screen controls.
	 */
	interact_text: string;
	/**
	 * An event identifier to fire when the interaction occurs.
	 */
	on_interact: string;
	/**
	 * Particle effect that will be triggered at the start of the interaction.
	 */
	particle_on_start: {
		/**
		 * Whether or not the particle will appear closer to who performed the interaction.
		 * @default false
		 */
		particle_offset_towards_interactor: boolean;
		/**
		 * The type of particle that will be spawned.
		 */
		particle_type: string;
		/**
		 * Will offset the particle this amount in the y direction.
		 * @default 0.0
		 */
		particle_y_offset: number;
	};
	/**
	 * An array of sound identifiers to play when the interaction occurs.
	 */
	play_sounds: string[];
	/**
	 * An array of entity identifiers to spawn when the interaction occurs.
	 */
	spawn_entities: string[];
	/**
	 * Loot table with items to drop on the ground upon successful interaction.
	 */
	spawn_items: {
		/**
		 * File path, relative to the behavior pack's path, to the loot table file.
		 */
		table: string;
	};
	/**
	 * If true, the player will do the 'swing' animation when interacting with this entity.
	 * @default false
	 */
	swing: boolean;
	/**
	 * The item used will transform to this item upon successful interaction. Format: itemName:auxValue.
	 */
	transform_to_item?: string;
	/**
	 * If true, the interaction will use an item.
	 * @default false
	 */
	use_item: boolean;
}
