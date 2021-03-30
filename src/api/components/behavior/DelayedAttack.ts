/**
 * Allows the mob to perform an attack where the hit is delayed.
 */
declare interface DelayedAttack {

	/**
	 * The duration of the attack animation in seconds.
	 * @default 1.0
	 */
	attack_duration: number;

	/**
	 * If true, this mob will attack only one time.
	 * @default false
	 */
	attack_once: boolean;

	/**
	 * Defines the entity types this mob will attack.
	 */
	attack_types: string;

	/**
	 * The percentage of the attack_duration that must pass before the hit is made.
	 * @default 1.0
	 */
	hit_delay_pct: number;

	/**
	 * Defines the probability the mob will stop fighting. A value of 0 disables randomly stopping, while a value of 1 defines a 50% chance.
	 * @default 0
	 */
	random_stop_interval: number;

	/**
	 * Multiplier for how far outside its box the mob can reach its target (this can be used to simulate a mob with longer arms by making this bigger).
	 * @default 2.0
	 */
	reach_multiplier: number;

	/**
	 * The sound event to play when the attack starts.
	 */
	sound_event: string;

	/**
	 * Movement speed multiplier of the mob when using this AI Goal.
	 * @default 1.0
	 */
	speed_multiplier: number;

	/**
	 * If true, this mob will chase after the target as long as it's a valid target.
	 * @default false
	 */
	track_target: boolean;
}
