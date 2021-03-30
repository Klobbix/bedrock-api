import { MultiplePowerable } from "./data/MultiplePowerable";

export class DaylightDetector implements MultiplePowerable {

	/**
	 * The current redstone power level produced by the daylight sensor.
	 * Allowed values: 0-15.
	 * @default 0.
	 */
	redstone_signal: number = 0;

}
