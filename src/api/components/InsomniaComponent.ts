/**
 * Adds a timer since last rested to see if phantoms should spawn.
 */
declare interface InsomniaComponent {

	/**
	 * Number of days the mob has to stay up until the insomnia effect begins.
	 * @default 3.0
	 */
	days_until_insomnia: number;
}
