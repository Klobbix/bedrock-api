/**
 * Allows the mob to use the polar bear's melee attack.
 */
declare interface StompAttack {

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
	 * Defines the probability the mob will stop fighting. A value of 0 disables randomly stopping, while a value of 1 defines a 50% chance.
	 * @default 0
	 */
	random_stop_interval: number;

	/**
	 *  Multiplier for how far outside its box the mob can reach its target (this can be used to simulate a mob with longer arms by making this bigger).
	 *  @default 2.0
	 */
	reach_multiplier: number;

	/**
	 * If true, this goal will only trigger if the mob can reach its target.
	 * @default false
	 */
	require_complete_path: boolean;

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
