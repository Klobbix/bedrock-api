import { MultiplePowerable } from "./data/MultiplePowerable";

export class PressurePlate implements MultiplePowerable {

	/**
	 * Specifies the redstone power level currently being produced by the pressure plate.
	 * Allowed values: 0-15.
	 */
	redstone_signal: number = 0;
}
