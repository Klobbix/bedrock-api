import { Directional } from "./data/Directional";

export class Repeater implements Directional {

	/**
	 * The redstone repeater's delay in redstone ticks minus 1.
	 * Allowed values: 0-3.
	 * @default 0.
	 */
	repeater_delay: number = 0;

	/**
	 * The direction from the output side to the input side of a repeater.
	 * The opposite from the direction the player faces while placing the repeater.
	 * Allowed values: 0-3.
	 * @default 0.
	 */
	direction: number = 0;
}
