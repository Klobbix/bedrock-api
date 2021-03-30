import { MultipleFacing } from "./data/MultipleFacing";

export class Chest implements MultipleFacing {
	/**
	 * The direction the chest's latch is on.
	 * Opposite from the direction the player faces when placing a chest.
	 */
	facing_direction: number = 2;

}
