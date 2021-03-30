import { MultipleFacing } from "./data/MultipleFacing";

export class PistonHead implements MultipleFacing {
	/**
	 * The direction the piston head is pointing.
	 * The opposite from the direction the player faces while placing the piston.
	 */
	facing_direction: number;

}
