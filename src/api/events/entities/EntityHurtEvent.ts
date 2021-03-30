/**
 * This event is triggered whenever an entity is hurt.
 */
declare interface EntityHurtEvent {
	/**
	 * The amount the damage was reduced by by the entity's absorption effect
	 */
	absorbed_damage: number;

	/**
	 * Present only when damaged by an entity or projectile. The entity that attacked and caused the damage
	 */
	attacker: Entity;

	/**
	 * Present only when damaged by a block. This is the position of the block that hit the entity
	 */
	block_position: VectorArray;

	/**
	 * The way the entity took damage. Refer to the Damage Source documentation for a complete list of sources
	 */
	cause: string;

	/**
	 * The amount of damage the entity took after immunity and armor are taken into account
	 */
	damage: number;

	/**
	 * The entity that took damage
	 */
	entity: Entity;

	/**
	 * Present only when damaged by a projectile. This is the identifier of the projectile that hit the entity
	 */
	projectile_type: string;

}
