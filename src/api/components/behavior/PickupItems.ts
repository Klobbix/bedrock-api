/**
 * Allows the mob to pick up items on the ground.
 */
declare interface PickupItems {

	/**
	 *  If true, the mob can pickup any item.
	 *  @default false
	 */
	can_pickup_any_item: boolean;

	/**
	 * If true, the mob can pickup items to its hand or armor slots.
	 * @default true
	 */
	can_pickup_to_hand_or_equipment: boolean;

	/**
	 * Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot.
	 * @default 0.5
	 */
	goal_radius: number;

	/**
	 * Maximum distance this mob will look for items to pick up.
	 * @default 0.0
	 */
	max_dist: number;

	/**
	 *  If true, depending on the difficulty, there is a random chance that the mob may not be able to pickup items.
	 *  @default false
	 */
	pickup_based_on_chance: boolean;

	/**
	 *  Movement speed multiplier of the mob when using this AI Goal.
	 *  @default 1.0
	 */
	speed_multiplier: number;

	/**
	 * If true, this mob will chase after the target as long as it's a valid target.
	 * @default false
	 */
	track_target: boolean;
}
