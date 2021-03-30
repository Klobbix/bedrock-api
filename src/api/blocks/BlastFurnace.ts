import { MultipleFacing } from "./data/MultipleFacing";

export class BlastFurnace implements MultipleFacing {
	/**
	 * The direction the blast furnace's opening face.
	 * Opposite from the direction the player faces when placing a blast furnace.
	 */
	facing_direction: number = 2;

}
