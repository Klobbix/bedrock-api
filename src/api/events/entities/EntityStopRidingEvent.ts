/**
 * This event is triggered whenever an entity stops riding another entity.
 */
declare interface EntityStopRidingEvent {
	/**
	 * The entity that was riding another entity
	 */
	entity: Entity;
	/**
	 * If true, the rider stopped riding because they are now dead
	 */
	entity_is_being_destroyed: boolean;
	/**
	 * If true, the rider stopped riding by their own decision
	 */
	exit_from_rider: boolean;
	/**
	 * If true, the rider stopped riding because they are now riding a different entity
	 */
	switching_rides: boolean;
}
