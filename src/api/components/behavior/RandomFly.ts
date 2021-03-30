/**
 * Allows a mob to randomly fly around.
 */
declare interface RandomFly {

	/**
	 * If true, the mob can stop flying and land on a tree instead of the ground.
	 * @default true
	 */
	can_land_on_trees: boolean;

	/**
	 * Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1.
	 * @default 10
	 */
	xz_dist: number;

	/**
	 *  Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1.
	 *  @default 7
	 */
	y_dist: number;
}
