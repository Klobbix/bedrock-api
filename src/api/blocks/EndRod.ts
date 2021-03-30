import { MultipleFacing } from "./data/MultipleFacing";

export class EndRod implements MultipleFacing {
	/**
	 * The direction to the end rod, from the block it is attached to; also the direction the white end points.
	 * Opposite from the direction the player faces when placing an end rod, and opposite from the purple end.
	 * Allowed values: 0-5.
	 */
	facing_direction: number;

}
