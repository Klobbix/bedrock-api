import { ChiselType } from "./types/ChiselType";
import { Orientable } from "./data/Orientable";
import { Axis } from "./types/Axis";

export class QuartzPillar implements Orientable {
	/**
	 * The type of the block.
	 */
	chisel_type: ChiselType = ChiselType.Default;

	/**
	 * The axis along which the block is oriented. Normally applies only to the pillar type.
	 * Allowed values: x, y, z.
	 */
	pillar_axis: Axis = Axis.Y;
}
