/**
 * This event is triggered whenever a player attacks an entity.
 */
declare interface PlayerAttackedEntityEvent {
	/**
	 * The entity that was attacked by the player
	 */
	attacked_entity: Entity;
	/**
	 * The player that attacked an entity
	 */
	player: Entity;
}
