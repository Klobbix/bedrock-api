import { MultipleFacing } from "./data/MultipleFacing";

export class Button implements MultipleFacing {
	/**
	 * If the button is currently activated.
	 * Allowed Values: 0-1.
	 */
	button_pressed_bit: number = 0;

	/**
	 * The direction it's facing.
	 * Opposite to the direction the player is facing if placed on the side of a block.
	 * Allowed Values: 0-5.
	 */
	facing_direction: number = 0;

}
