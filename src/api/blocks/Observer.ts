import { MultipleFacing } from "./data/MultipleFacing";

export class Observer implements MultipleFacing {
	/**
	 * The direction the observer is observing. The same direction the player faces when placing the block.
	 */
	facing_direction: number = 0;

	/**
	 * True while the observer is observing a change and emitting a pulse.
	 */
	powered_bit: number = 0;

}
