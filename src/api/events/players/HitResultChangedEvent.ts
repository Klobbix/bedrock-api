/**
 * This event is triggered whenever the reticle changes from pointing at a block or air to pointing at an entity and the other way around. Up to 1000 blocks away.
 */
declare interface HitResultChangedEvent {
	/**
	 * The entity that was hit or null if it fired when moving off of an entity
	 */
	entity: Entity;
	/**
	 * The position of the entity that was hit or null if it fired when moving off an entity
	 */
	position: Vector | null;
}
