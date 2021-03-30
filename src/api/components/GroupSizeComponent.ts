/**
 * Keeps track of entity group size in the given radius.
 */
declare interface GroupSizeComponent {

	/**
	 *  The list of conditions that must be satisfied for other entities to be counted towards group size.
	 */
	filters: Filter;

	/**
	 * Radius from center of entity.
	 * @default 16
	 */
	radius: number;
}
