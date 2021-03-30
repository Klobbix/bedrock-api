/**
 * This component allows players to set the light level range that causes the mob to spawn.
 */
declare interface BrightnessFilterComponent {

	/**
	 * This determines if weather can affect the light level conditions that cause the mob to spawn (e.g. Allowing hostile mobs to spawn during the day when it rains.)
	 * @default false
	 */
	adjust_for_weather: boolean;

	/**
	 * This is the maximum light level value that allows the mob to spawn.
	 * @default 15.0
	 */
	max: number;

	/**
	 * This is the minimum light level value that allows the mob to spawn.
	 * @default 0.0
	 */
	min: number;
}
