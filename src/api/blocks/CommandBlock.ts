import { MultipleFacing } from "./data/MultipleFacing";

export class CommandBlock implements MultipleFacing {

	/**
	 * True if the command block is in conditional mode.
	 * Allowed values: 0-1.
	 * @default 0.
	 */
	conditional_bit: number = 0;

	/**
	 * The direction the command block is pointing.
	 */
	facing_direction: number;
}
