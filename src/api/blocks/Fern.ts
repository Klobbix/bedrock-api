import { GrassType } from "./types/GrassType";
import { FlowerType } from "./types/FlowerType";
import { Bisected } from "./data/Bisected";

export class Fern {

	/**
	 * The variant of this block, snow is snowlogged grass. (default looks the same as tall).
	 */
	tall_grass_type: GrassType = GrassType.Default;
}

export class TallFern implements Bisected {

	/**
	 * The flower type.
	 * Allowed values:
	 * fern
	 * grass
	 * paeonia
	 * rose
	 * sunflower
	 * syringa
	 * @default sunflower
	 */
	double_flower_type: FlowerType = FlowerType.Sunflower;

	/**
	 * If the upper half of the plant contained in this block.
	 */
	upper_block_bit: boolean = false;
}
