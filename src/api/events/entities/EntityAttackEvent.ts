/**
 * This event is triggered whenever an entity is being attacked by another entity. This does not guarantee the entity was or will be hurt by the attack.
 */
declare interface EntityAttackEvent {
	/**
	 * The entity that attacked
	 */
	entity: Entity;

	/**
	 * The entity that was targeted in the attack
	 */
	target: Entity;
}
