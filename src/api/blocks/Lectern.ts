import { Directional } from "./data/Directional";

export class Lectern implements Directional {

	/**
	 * The direction the lectern is facing.
	 * Opposite from the direction the player faces when placing a lectern.
	 */
	direction: number = 0;

	/**
	 * If the lectern is currently outputting a redstone signal.
	 */
	powered_bit: number = 0;
}
