import { MultiplePowerable } from "./data/MultiplePowerable";

export class RedstoneDust implements MultiplePowerable {

	/**
	 * The redstone dust's current power level.
	 * Allowed values: 0-15.
	 */
	redstone_signal: number = 0;
}
