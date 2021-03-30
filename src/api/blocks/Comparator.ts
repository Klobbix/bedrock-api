import { Directional } from "./data/Directional";

export class Comparator implements Directional {

	/**
	 * The direction from the output side to the input side of the comparator, or the opposite from the direction the player faces while placing the comparator.
	 * Allowed values: 0-3.
	 */
	direction: number;

	/**
	 * True if the redstone comparator is being powered.
	 */
	output_lit_bit: number = 0;

	/**
	 * Specifies the current mode of the redstone comparator.
	 */
	output_subtract_bit: number = 0;

}
