/**
 * Applies defined amount of damage to the entity at specified intervals.
 */
declare interface DamageOverTimeComponent {

	/**
	 * Amount of damage caused each hurt.
	 * @default 1
	 */
	damage_per_hurt: number;

	/**
	 * Time in seconds between damage.
	 * @default 0.0
	 */
	time_between_hurt: number;
}
