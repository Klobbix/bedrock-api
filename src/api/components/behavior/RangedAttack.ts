/**
 * Allows the mob to use ranged attacks like shooting arrows.
 */
declare interface RangedAttack {

	/**
	 * Maximum amount of time in seconds the entity will wait after an attack before launching another.
	 * @default 0
	 */
	attack_interval_max: number;

	/**
	 *  Minimum amount of time in seconds the entity will wait after an attack before launching another.
	 *  @default 0
	 */
	attack_interval_min: number;

	/**
	 * Maximum distance the target can be for this mob to fire. If the target is further away, this mob will move first before firing.
	 * @default 0.0
	 */
	attack_radius: number;

	/**
	 * Amount of time in seconds between each individual shot when firing multiple shots per attack.
	 * @default 0.0
	 */
	burst_interval: number;

	/**
	 * Number of shots fired every time the mob uses a charged attack.
	 * @default 1
	 */
	burst_shots: number;

	/**
	 *  The minimum amount of time in ticks the mob has to charge before firing a charged attack.
	 *  @default 0.0
	 */
	charge_charged_trigger: number;

	/**
	 * The minimum amount of time in ticks for the mob to start charging a charged shot. Must be greater than 0 to enable burst shots.
	 * @default 0.0
	 */
	charge_shoot_trigger: number;

	/**
	 * The allowable FOV the actor will use to determine if it can make a valid ranged attack.
	 * @default 90.0
	 */
	ranged_fov: number;

	/**
	 * Movement speed multiplier of the mob when using this AI Goal.
	 * @default 1.0
	 */
	speed_multiplier: number;
}
