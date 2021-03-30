/**
 * Controls the collision box of the entity. When changes to the component are applied the entity's collision box is immediately updated to reflect the new dimensions.
 * WARNING: If the change of the collision box dimensions would cause the entity to be inside a block, the entity might become stuck there and start suffocating.
 */
declare interface CollisionBoxComponent {
	/**
	 * Height of the collision box in blocks. A negative value will be assumed to be 0
	 * @default 1.0
	 */
	height: number;
	/**
	 * Width and Depth of the collision box in blocks. A negative value will be assumed to be 0
	 * @default 1.0
	 */
	width: number;
}
