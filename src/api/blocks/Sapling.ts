import { WoodType } from "./types/WoodType";

export class Sapling {

	/**
	 * Specifies the sapling's growth stage.
	 */
	age_bit: boolean = false;

	/**
	 * The type of the sapling.
	 */
	sapling_type: WoodType = WoodType.Oak;
}
