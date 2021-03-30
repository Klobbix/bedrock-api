/**
 * -- Level Component --
 * The weather component allows users to change the level's weather. Rain and lightning levels can be changed independently and the default weather cycle can be turned off completely.
 */
declare interface WeatherComponent {
	/**
	 * This is the world option that determines if the vanilla weather cycle will be used
	 */
	do_weather_cycle: boolean;

	/**
	 * A value between 0 and 1 that determines how heavy the rainfall is
	 */
	rain_level: number;

	/**
	 * How long, in ticks, it will rain for
	 */
	rain_time: number;

	/**
	 * A value between 0 and 1 that determines how much lightning and thunder there is
	 */
	lightning_level: number;

	/**
	 * How long, in ticks, it will lightning and thunder for
	 */
	lightning_time: number;
}
