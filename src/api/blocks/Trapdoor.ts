import { Directional } from "./data/Directional";
import { Openable } from "./data/Openable";

export class Trapdoor implements Directional, Openable {

	/**
	 * The direction the trapdoor swings open.
	 * The opposite from the side its hinge is attached to.
	 * Allowed values: 0-3.
	 */
	direction: number = 0;

	/**
	 * True if the trapdoor is currently open.
	 */
	open_bit: number = 0;

	/**
	 * Whether the trapdoor occupies the top or bottom part of a block.
	 */
	upside_down_bit: number = 0;

}
