import { Axis } from "./types/Axis";
import { Orientable } from "./data/Orientable";

export class BoneBlock implements Orientable {

	/**
	 * The axis along which the block is oriented.
	 * Allowed values: x, y, z
	 * @default y
	 */
	pillar_axis: Axis = Axis.Y;

	/**
	 * Unused, has no effect in game.
	 * Allowed values: 0-3.
	 */
	deprecated: number = 0;
}
