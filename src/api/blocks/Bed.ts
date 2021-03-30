export class Bed {
	/**
	 * The direction the head of the bed is pointing.
	 * The same direction the player faces when placing the bed.
	 * Allowed values: 0-3.
	 * @default 0
	 */
	facing_bit: number = 0;

	/**
	 * If the current block is the head part.
	 */
	head_bit: boolean = false;

	/**
	 * True when a player is using the bed.
	 */
	occupied_bit: boolean = false;
}
