export class Tripwire {

	/**
	 * True if the tripwire is connected to a valid tripwire circuit.
	 */
	attached_bit: number = 0;

	/**
	 * True if the tripwire is disarmed, that is, broken using shears.
	 */
	disarmed_bit: number = 0;

	/**
	 * True if the tripwire is active.
	 */
	powered_bit: number = 0;

	/**
	 * True if the tripwire is not on top of a block.
	 */
	suspended_bit: number = 0;
}
