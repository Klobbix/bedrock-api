/**
 * This component allows you to control an entity's current position in the world. Once applied the entity will be teleported to the new position specified.
 */
declare interface PositionComponent {
	/**
	 * Position along the X-Axis (east-west) of the entity
	 * @default 0.0
	 */
	x: number;
	/**
	 * Position along the Y-Axis (height) of the entity
	 * @default 0.0
	 */
	y: number;
	/**
	 * Position along the Z-Axis (north-south) of the entity
	 * @default 0.0
	 */
	z: number;
}
