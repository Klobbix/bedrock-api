/**
 * This event is triggered whenever an entity becomes a rider on another entity.
 */
declare interface EntityStartRidingEvent {
	/**
	 * The rider
	 */
	entity: Entity;
	/**
	 * The entity being ridden
	 */
	ride: Entity;
}
