/**
 * Defines the entity's ranged attack behavior.
 * This doesn't allow the entity to use a ranged attack: it only defines what kind of projectile it shoots.
 */
declare interface ShooterComponent {
	/**
	 * ID of the Potion effect to be applied on hit.
	 * @default -1
	 */
	aux_val: number;
	/**
	 * Actor definition to use as projectile for the ranged attack. The actor definition must have the projectile component to be able to be shot as a projectile.
	 */
	def: string;
}
