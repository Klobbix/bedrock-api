import { Directional } from "./data/Directional";

export class TripwireHook implements Directional {
	/**
	 * True if the tripwire hook is connected to a valid tripwire circuit.
	 */
	attached_bit: number = 0;

	/**
	 * The direction in which the tripwire hook juts out from the block it is attached to.
	 * For example, a tripwire hook facing north will be attached to a block to its south.
	 * Allowed values: 0-3.
	 */
	direction: number = 0;

	/**
	 * True if the tripwire hook is active.
	 */
	powered_bit: number = 0;
}
