import { MultipleFacing } from "./data/MultipleFacing";

export class Dispenser implements MultipleFacing {
	/**
	 * The direction in which contents are shot or dropped.
	 * The opposite from the direction the player faces while placing the block.
	 * Allowed values: 0-7.
	 */
	facing_direction: number = 0;

	/**
	 * True if this block is activated.
	 */
	triggered_bit: boolean = false;

}
