import { Directional } from "./data/Directional";
import { Openable } from "./data/Openable";

export class Door implements Directional, Openable {
	/**
	 * The direction the door's "inside" is facing.
	 * The direction the player faces while placing the door.
	 * For example, a door facing east will occupy the west part of its block when closed.
	 */
	direction: number = 0;

	/**
	 * Identifies the side the hinge is on (when facing the same direction as the door's inside).
	 */
	door_hinge_bit: number = 0;

	/**
	 * True if the door is currently open.
	 */
	open_bit: number = 0;

	/**
	 * Identifies which part of the door the block is.
	 */
	upper_block_bit: number = 0;

}
