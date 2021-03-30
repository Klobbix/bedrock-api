/**
 * Allows the mob to move back to the position they were spawned.
 */
declare interface GoHome {

	/**
	 * Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot.
	 * @default 0.5
	 */
	goal_radius: number;

	/**
	 * A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal.
	 * @default 120
	 */
	interval: number;

	/**
	 * Event to run when the mob is unable to get home due to the home position being too far away or if the mob is in a different dimension.
	 */
	on_failed: Trigger;

	/**
	 *  Event to run when this mob arrives at home.
	 */
	on_home: Trigger;

	/**
	 * Movement speed multiplier of the mob when using this AI Goal.
	 * @default 1.0
	 */
	speed_multiplier: number;
}
