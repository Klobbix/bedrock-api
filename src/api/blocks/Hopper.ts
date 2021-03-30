import { MultipleFacing } from "./data/MultipleFacing";

export class Hopper implements MultipleFacing {
	/**
	 *The direction the hopper's output points.
	 * The hopper will push items into containers in this direction only.
	 */
	facing_direction: number = 0;

	/**
	 * True if hopper cannot move items to and from its inventory.
	 * When the hopper is being powered by redstone current, this is set to true.
	 */
	toggle_bit: number = 0;

}
