/**
 * This allows the mob celebrate by jumping up and playing a sound periodically.
 */
declare interface Celebrate {

	/**
	 * The sound to occasionally play.
	 */
	celebration_sound: string;
	/**
	 *  The duration of the celebration (in seconds).
	 *  @default 1.0
	 */
	duration: number;
	/**
	 * The range of time in seconds to randomly wait before jumping again.
	 * @default 0
	 */
	jump_interval: MinecraftRange;
	/**
	 * The event to trigger when the goal's duration expires.
	 */
	on_celebration_end_event: Trigger;
	/**
	 * The range of time in seconds to randomly wait before playing the sound again.
	 * @default 0
	 */
	sound_interval: MinecraftRange;
}
