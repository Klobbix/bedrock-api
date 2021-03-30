/**
 * Allows mob to move towards its current target.
 */
declare interface MoveTowardsTarget {

	/**
	 * Defines the radius in blocks that the mob tries to be from the target. A value of 0 means it tries to occupy the same block as the target.
	 * @default 0.0
	 */
	within_radius: number;

}
