import { MultipleFacing } from "./data/MultipleFacing";

export class Stonecutter implements MultipleFacing {

	/**
	 * The direction the stonecutter is facing.
	 * Opposite from the direction the player faces when placing a stonecutter.
	 * Allowed values: 0-5.
	 * @default 0.
	 */
	facing_direction: number = 0;

}
