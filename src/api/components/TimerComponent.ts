/**
 * Adds a timer after which an event will fire.
 */
declare interface TimerComponent {

	/**
	 *  If true, the timer will restart every time after it fires.
	 *  @default true
	 */
	looping: boolean;

	/**
	 * If true, the amount of time on the timer will be random between the min and max values specified in time.
	 * @default true
	 */
	randomInterval: boolean;

	/**
	 * This is a list of objects, representing one value in seconds that can be picked before firing the event and an optional weight. Incompatible with time.
	 */
	random_time_choices: {
		weight: number;
		value: number;
	}[];

	/**
	 *  Amount of time in seconds for the timer. Can be specified as a number or a pair of numbers (min and max). Incompatible with random_time_choices.
	 *  @default [0.0,0.0]
	 */
	time: MinecraftRange;

	/**
	 * Event to fire when the time on the timer runs out.
	 */
	time_down_event: string;
}
