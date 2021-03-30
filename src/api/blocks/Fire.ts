export class Fire {

	/**
	 * Newly-placed fire has an age of 0, and has a 1⁄3 chance of incrementing with each block tick.
	 * This factor affects how the fire extinguishes.
	 * Allowed values: 0-15.
	 * @default 0.
	 */
	age: number = 0;
}
