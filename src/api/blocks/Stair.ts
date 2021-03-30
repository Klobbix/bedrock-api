export class Stair {

	/**
	 * True if the stairs are upside-down.
	 * @default false
	 */
	upside_down_bit: boolean = false;

	/**
	 * The direction the stairs' full-block side faces.
	 * When placed in-game by a player, this matches the direction the player faces.
	 * Allowed values: 0-3.
	 * @default 0.
	 */
	weirdo_direction: number = 0;
}
