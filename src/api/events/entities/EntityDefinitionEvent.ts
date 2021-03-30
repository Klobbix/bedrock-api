/**
 * This event is triggered whenever an entity definition event is triggered by either script or the entity's JSON.
 */
declare interface EntityDefinitionEvent {
	/**
	 * The entity that was affected
	 */
	entity: Entity;

	/**
	 * The event that was triggered
	 */
	event: string;
}
