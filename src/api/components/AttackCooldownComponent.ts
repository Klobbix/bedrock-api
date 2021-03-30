/**
 * Adds a cooldown to a mob. The intention of this cooldown is to be used to prevent the mob from attempting to aquire new attack targets.
 */
declare interface AttackCooldownComponent {

	/**
	 * Event to be runned when the cooldown is complete.
	 */
	attack_cooldown_complete_event: Trigger;

	/**
	 * Amount of time in seconds for the cooldown. Can be specified as a number or a pair of numbers (min and max).
	 * @default [0.0, 1.0]
	 */
	attack_cooldown_time: MinecraftRange;
}
