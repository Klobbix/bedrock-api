/**
 * Defines what mob effects to add and remove to the entity when adding this component.
 */
declare interface SpellEffectsComponent {

	/**
	 * Effect to add to this entity. Includes 'duration' in seconds, 'amplifier' level, 'ambient' if it is to be considered an ambient effect, and 'visible' if the effect should be visible.
	 */
	add_effects: [{ effect: string }];

	/**
	 * List of identifiers of effects to be removed from this entity after adding this component.
	 */
	remove_effects: string[];
}
