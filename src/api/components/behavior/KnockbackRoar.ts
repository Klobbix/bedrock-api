/**
 * Allows the mob to perform a damaging knockback that affects all nearby entities.
 */
declare interface KnockbackRoar {

	/**
	 * The delay after which the knockback occurs (in seconds).
	 * @default 0.5
	 */
	attack_time: number;

	/**
	 * Time in seconds the mob has to wait before using the goal again.
	 * @default 0.0
	 */
	cooldown_time: number;

	/**
	 * The duration of the roar (in seconds).
	 * @default 1.0
	 */
	duration: number;

	/**
	 * The damage dealt by the knockback roar.
	 * @default 6
	 */
	knockback_damage: number;

	/**
	 * The radius (in blocks) of the knockback effect.
	 * @default 4
	 */
	knockback_range: number;

	/**
	 *  The strength of the knockback.
	 *  @default 4
	 */
	knockback_strength: number;

	/**
	 * Triggers.
	 */
	on_roar_end: Trigger;
}
