import { Directional } from "./data/Directional";
import { Openable } from "./data/Openable";

export class Gate implements Directional, Openable {
	/**
	 * For an open gate, the direction the gates swing open.
	 * For a closed gate, the direction the player was facing when the gate was placed, or the last direction the gates have swung.
	 */
	direction: number = 0;

	/**
	 * If the gate is lowered by three pixels, to accommodate attaching more cleanly with walls.
	 */
	in_wall_bit: number = 0;

	/**
	 * If the gate is opened.
	 */
	open_bit: number = 0;

}
