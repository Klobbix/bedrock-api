/**
 * This component allows you to control an entity's current rotation in the world as well as the entity's head rotation.
 * Once applied, the entity will be rotated as specified.
 */
declare interface RotationComponent {
	/**
	 * Controls the head rotation looking up and down
	 * @default 0.0
	 */
	x: number;
	/**
	 * Controls the body rotation parallel to the floor
	 * @default 0.0
	 */
	y: number;
}
