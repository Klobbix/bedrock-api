import { Directional } from "./data/Directional";

export class Cocoa implements Directional {

	/**
	 * The stage of the pod's growth, 2 is fully grown.
	 * Allowed values: 0-2.
	 * @default 0.
	 */
	age: number = 0;

	/**
	 * The direction from the cocoa bean to the log.
	 * The direction the player faces when placing the cocoa.
	 * Allowed values: 0-3.
	 * @default 0.
	 */
	direction: number = 0;

}
