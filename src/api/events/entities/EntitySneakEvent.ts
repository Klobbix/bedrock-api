/**
 * This event is triggered whenever an entity flag's value changes.
 */
declare interface EntitySneakEvent {
	/**
	 * The entity that changed their sneaking state
	 */
	entity: Entity;

	/**
	 * If true, the entity just started sneaking. If false, the entity just stopped sneaking
	 */
	sneaking: boolean;
}
