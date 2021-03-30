import { Directional } from "./data/Directional";

export class Campfire implements Directional {

	/**
	 * The direction the campfire is facing.
	 * @default 0.
	 */
	direction: number = 0;

	/**
	 * Whether the campfire is put out.
	 * Allowed values: 0-1.
	 * @default 0.
	 */
	extinguished: number = 0;

}
