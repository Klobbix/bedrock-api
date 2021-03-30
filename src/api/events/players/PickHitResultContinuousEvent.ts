/**
 * This event is triggered every update and tells you what entity the mouse pointer is pointing to in the world up to 1000 blocks away.
 */
declare interface PickHitResultContinuousEvent {
	/**
	 * The entity that was hit or null if it not pointing at an entity
	 */
	entity: Entity;
	/**
	 * The position of the entity that was hit or block that was hit
	 */
	position: Vector;
}
