/**
 * This event is triggered whenever an entity is ticked. This event will not fire when a player is ticked.
 */
declare interface EntityTickEvent {
	/**
	 * The entity that was ticked
	 */
	entity: Entity;
}
