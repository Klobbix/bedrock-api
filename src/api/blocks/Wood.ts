import { WoodType } from "./types/WoodType";
import { Axis } from "./types/Axis";

export class Wood {

	/**
	 * x	The wood is oriented east–west.
	 * y	The wood is oriented vertically.
	 * z	The wood is oriented north–south.
	 */
	pillar_axis: Axis = Axis.Y;

	/**
	 * Whether the wood is stripped or not.
	 */
	stripped_bit: number = 0;

	/**
	 * The type of wood plank it is.
	 */
	wood_type: WoodType = WoodType.Oak;
}
