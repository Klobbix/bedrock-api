/**
 * This event is triggered whenever the weather changes. It contains information about the weather it is changing to.
 */
declare interface WeatherChangedEvent {
	/**
	 * The name of the dimension where the weather change happened
	 */
	dimension: string;
	/**
	 * Tells if the new weather has lightning
	 */
	lightning: boolean;
	/**
	 * Tells if the new weather has rain
	 */
	raining: boolean;
}
