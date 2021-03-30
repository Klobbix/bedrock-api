import { WoodType } from "./types/WoodType";

export class Log {
	/**
	 * 0	The log is oriented vertically.
	 * 1	The log is oriented east–west.
	 * 2	The log is oriented north–south.
	 */
	pillar_axis: number = 0;

	/**
	 * Allowed values: birch, jungle, oak, spruce.
	 */
	old_log_type: WoodType = WoodType.Oak;

	/**
	 * Allowed values: acacia, dark_oak.
	 */
	new_log_type: WoodType = WoodType.Acacia;
}
