import { Growth } from "./data/Growth";

export class Wheat implements Growth {

	/**
	 * Represents the current growth state of the wheat.
	 * Allowed values: 0-7.
	 * @default 0
	 */
	growth: number = 0;

}
