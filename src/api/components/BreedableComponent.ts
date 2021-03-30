/**
 * Defines the way an entity can get into the 'love' state.
 */
declare interface BreedableComponent {

	/**
	 *  If true, entities can breed while sitting.
	 *  @default true
	 */
	allow_sitting: boolean;

	/**
	 *  If true, the entities will blend their attributes in the offspring after they breed. For example, horses blend their health, movement, and jump_strength in their offspring.
	 *  @default true
	 */
	blend_attributes: boolean;

	/**
	 * Time in seconds before the Entity can breed again.
	 * @default 60
	 */
	breed_cooldown: number;

	/**
	 * The list of items that can be used to get the entity into the 'love' state.
	 */
	breed_items: string[];

	/**
	 * The list of entity definitions that this entity can breed with.
	 */
	breeds_with: {
		/**
		 * The entity definition of this entity's babies.
		 */
		baby_type: string;

		/**
		 *  Event to run when this entity breeds.
		 */
		breed_event: string;

		/**
		 * The entity definition of this entity's mate.
		 */
		mate_type: string;
	}[];

	/**
	 * If true, the entity will become pregnant instead of spawning a baby.
	 * @default false
	 */
	causes_pregnancy: boolean;

	/**
	 * Determines how likely the baby of parents with the same variant will deny that variant and take a random variant within the given range instead.
	 */
	deny_parents_variant: {

		/**
		 *  The percentage chance of denying the parents' variant.
		 *  @default 0
		 */
		chance: number;

		/**
		 * The inclusive maximum of the variant range.
		 * @default 0
		 */
		max_variant: number;

		/**
		 *  The inclusive minimum of the variant range.
		 *  @default 0
		 */
		min_variant: number;
	};

	/**
	 * The list of nearby block requirements to get the entity into the 'love' state.
	 */
	environments_requirements: {

		/**
		 * The block types required nearby for the entity to breed.
		 */
		blocks: string[];

		/**
		 * The number of the required block types nearby for the entity to breed.
		 */
		count: number;

		/**
		 * How many blocks radius from the mob's center to search in for the required blocks. Bounded between 0 and 16.
		 */
		radius: number;
	}[];

	/**
	 * Chance that up to 16 babies will spawn between 0.0 and 1.0, where 1.0 is 100%.
	 * @default 0
	 */
	extra_baby_chance: number;

	/**
	 * If true, the babies will be automatically tamed if its parents are.
	 * @default true
	 */
	inherit_tamed: boolean;

	/**
	 * The filters to run when attempting to fall in love.
	 */
	love_filters: Filter;

	/**
	 *  Determines how likely the babies are to NOT inherit one of their parent's variances. Values are between 0.0 and 1.0, with a higher number meaning more likely to mutate.
	 */
	mutation_factor: {

		/**
		 * The percentage chance of a mutation on the entity's color.
		 * @default 0
		 */
		color: number;

		/**
		 *  The percentage chance of a mutation on the entity's extra variant type.
		 *  @default 0
		 */
		extra_variant: number;

		/**
		 * The percentage chance of a mutation on the entity's variant type.
		 * @default 0
		 */
		variant: number;
	};

	/**
	 *  If true, the entity needs to be at full health before it can breed.
	 *  @default false
	 */
	require_full_health: boolean;

	/**
	 *  If true, the entities need to be tamed first before they can breed.
	 *  @default true
	 */
	require_tame: boolean;

}
