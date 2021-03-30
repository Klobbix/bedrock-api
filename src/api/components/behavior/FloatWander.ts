/**
 * Allows the mob to float around like the Ghast.
 */
declare interface FloatWander {

	/**
	 * Range of time in seconds the mob will float around before landing and choosing to do something else.
	 * @default [0.0, 0.0]
	 */
	float_duration: MinecraftRange;

	/**
	 * If true, the point has to be reachable to be a valid target.
	 * @default false
	 */
	must_reach: boolean;

	/**
	 * If true, the mob will randomly pick a new point while moving to the previously selected one.
	 * @default false
	 */
	random_reselect: boolean;

	/**
	 * Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1.
	 * @default 10
	 */
	xz_dist: number;

	/**
	 * Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1.
	 * @default 7
	 */
	y_dist: number;

	/**
	 * Height in blocks to add to the selected target position.
	 * @default 0.0
	 */
	y_offset: number;
}
