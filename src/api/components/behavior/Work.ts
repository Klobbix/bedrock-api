/**
 * Allows the NPC to use their jobsite POI.
 */
declare interface Work {

	/**
	 * The amount of ticks the NPC will stay in their the work location.
	 * @default 0
	 */
	active_time: number;

	/**
	 * If true, this entity can work when their jobsite POI is being rained on.
	 * @default false
	 */
	can_work_in_rain: boolean;

	/**
	 * The amount of ticks the goal will be on cooldown before it can be used again.
	 * @default 0
	 */
	goal_cooldown: number;

	/**
	 * Event to run when the mob reaches their jobsite and finishes working.
	 */
	on_arrival: string;

	/**
	 * The max interval in which a sound will play.
	 * @default 0
	 */
	sound_delay_max: number;

	/**
	 * The min interval in which a sound will play.
	 * @default 0
	 */
	sound_delay_min: number;

	/**
	 * Movement speed multiplier of the mob when using this AI Goal.
	 * @default 1.0
	 */
	speed_multiplier: number;

	/**
	 * If "can_work_in_rain" is false, this is the maximum number of ticks left in the goal where rain will not interrupt the goal.
	 * @default -1
	 */
	work_in_rain_tolerance: number;

}
