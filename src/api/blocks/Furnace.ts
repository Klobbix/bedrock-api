import { MultipleFacing } from "./data/MultipleFacing";

export class Furnace implements MultipleFacing {

	/**
	 * The direction the furnace opening faces.
	 * Opposite from the direction the player faces when placing a furnace.
	 * Allowed values: 0-5.
	 * @default 2.
	 */
	facing_direction: number = 2;

}
