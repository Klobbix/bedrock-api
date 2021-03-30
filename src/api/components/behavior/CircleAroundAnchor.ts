/**
 * Allows the mob to move in a circle around a point or a target.
 */
declare interface CircleAroundAnchor {
	/**
	 * Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot.
	 * @default 0.5
	 */
	goal_radius: number;
	/**
	 * When the mob finds a target, the range of height in blocks above the target to start the anchor point.
	 * @default [0.0, 0.0]
	 */
	height_above_target_range: MinecraftRange;
	/**
	 * A random value to determine when to change the height of the mob from the anchor point. This has a 1/value chance every tick to do so.
	 * @default 350
	 */
	height_change_chance: number;
	/**
	 * The range of height in blocks offset the mob can have from it's anchor point.
	 * @default [0.0, 0.0]
	 */
	height_offset_range: MinecraftRange;
	/**
	 * A random value to determine when to increase the size of the radius up to the maximum. This has a 1/value chance every tick to do so.
	 * @default 250
	 */
	radius_change_chance: number;
	/**
	 * Range of radius in blocks of the circle to move around.
	 * @default [5.0, 15.0]
	 */
	radius_range: MinecraftRange;
	/**
	 * Movement speed multiplier of the mob when using this AI Goal.
	 * @default 1.0
	 */
	speed_multiplier: number;
}
