/**
 * Defines the entity's movement on the rails. An entity with this component is only allowed to move on the rail.
 */
declare interface RailMovementComponent {

	/**
	 * Maximum speed that this entity will move at when on the rail.
	 * @default 0.4
	 */
	max_speed: number;
}
