import { MultipleFacing } from "./data/MultipleFacing";
import { Openable } from "./data/Openable";

export class Barrel implements MultipleFacing, Openable {

	/**
	 * The direction the barrel is facing.
	 * Options: 0-5.
	 * @default 0
	 */
	facing_direction: number = 0;

	/**
	 * Whether the barrel is currently being looked at by a player; changes the texture on the top face.
	 * Options: 0-1.
	 * @default 0
	 */
	open_bit: number = 0;

}
