/**
 * Defines the entity's 'angry' state using a timer.
 */
declare interface AngryComponent {

	/**
	 * The sound event to play when the mob is angry.
	 */
	angry_sound: string;

	/**
	 * If true, other entities of the same entity definition within the broadcastRange will also become angry.
	 * @default false
	 */
	broadcast_anger: boolean;

	/**
	 *  If true, other entities of the same entity definition within the broadcastRange will also become angry whenever this mob attacks.
	 *  @default false
	 */
	broadcast_anger_on_attack: boolean;

	/**
	 * If true, other entities of the same entity definition within the broadcastRange will also become angry whenever this mob is attacked.
	 * @default false
	 */
	broadcast_anger_on_being_attacked: boolean;

	/**
	 *  Conditions that make this entry in the list valid.
	 */
	broadcast_filters: Filter;

	/**
	 *  Distance in blocks within which other entities of the same entity definition will become angry.
	 *  @default 20
	 */
	broadcast_range: number;

	/**
	 * A list of entity families to broadcast anger to.
	 */
	broadcast_targets: string[];

	/**
	 *  Event to run after the number of seconds specified in duration expires (when the entity stops being 'angry').
	 */
	calm_event: string;

	/**
	 * The amount of time in seconds that the entity will be angry.
	 * @default 25
	 */
	duration: number;

	/**
	 * Variance in seconds added to the duration [-delta, delta].\
	 * @default 0
	 */
	duration_delta: number;

	/**
	 *  Filter out mob types that it should not attack while angry (other Piglins).
	 */
	filters: Filter;

	/**
	 * The range of time in seconds to randomly wait before playing the sound again.
	 * @default 0
	 */
	sound_interval: MinecraftRange;
}
