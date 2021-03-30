import { Orientable } from "./data/Orientable";
import { Axis } from "./types/Axis";

export class HayBale implements Orientable {

	/**
	 * x - The hay block is oriented east–west.
	 * y - The hay block is oriented vertically.
	 * z - The hay block is oriented north–south.
	 */
	pillar_axis: Axis = Axis.Y;

	/**
	 * Unused, has no effect in game.
	 */
	deprecated: number = 0;
}
