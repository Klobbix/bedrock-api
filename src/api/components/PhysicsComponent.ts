/**
 * Defines a dynamic type jump control that will change jump properties based on the speed modifier of the mob.
 */
declare interface PhysicsComponent {

	/**
	 * Whether or not the object collides with things.
	 * @default true
	 */
	has_collision: boolean;

	/**
	 * Whether or not the entity is affected by gravity.
	 * @default true
	 */
	has_gravity: boolean;

}
