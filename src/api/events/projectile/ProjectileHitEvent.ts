/**
 * This event is triggered whenever a projectile hits something.
 */
declare interface ProjectileHitEvent {
	/**
	 * The entity that was hit by the projectile, if any
	 */
	entity: Entity;

	/**
	 * The entity that fired the projectile
	 */
	owner: Entity;

	/**
	 * The position of the collision
	 */
	position: VectorArray;

	/**
	 * The projectile in question
	 */
	projectile: Entity;
}
