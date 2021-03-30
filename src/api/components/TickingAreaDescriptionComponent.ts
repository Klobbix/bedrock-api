/**
 * Describes the ticking area's region.
 */
declare interface TickingAreaDescriptionComponent {
	/**
	 * Is the area a circle. If false the area is a square.
	 */
	is_circle: boolean;

	/**
	 * (if area is a square) The edge of the area.
	 */
	max: VectorArray;

	/**
	 * The name of the area.
	 */
	name: string;

	/**
	 * The origin position of the area.
	 */
	origin: VectorArray;

	/**
	 * (if area is a circle) The radius of the area.
	 */
	radius: VectorArray;

}
