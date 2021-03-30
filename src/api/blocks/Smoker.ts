import { MultipleFacing } from "./data/MultipleFacing";

export class Smoker implements MultipleFacing {

	/**
	 * The direction the smoker opening faces.
	 * The opposite from the direction the player faces while placing the smoker.
	 * Allowed values: 0-5.
	 * @default 2.
	 */
	facing_direction: number = 2;

}
