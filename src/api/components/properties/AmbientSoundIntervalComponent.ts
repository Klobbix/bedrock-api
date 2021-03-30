/**
 * Sets the entity's delay between playing its ambient sound.
 */
declare interface AmbientSoundIntervalComponent {
	/**
	 * Level sound event to be played as the ambient sound.
	 * @default ambient
	 */
	event_name: string;

	/**
	 *  Maximum time in seconds to randomly add to the ambient sound delay time.
	 *  @default 16.000000
	 */
	range: number;

	/**
	 * Minimum time in seconds before the entity plays its ambient sound again.
	 * @default 8.000000
	 */
	value: number;
}
