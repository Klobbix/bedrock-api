import { FlowerType } from "./types/FlowerType";
import { Bisected } from "./data/Bisected";

export class LargeFlowers implements Bisected {
	/**
	 * All small flowers except dandelion.
	 * The flower type.
	 */
	flower_type: FlowerType = FlowerType.Poppy;


	//Sunflower, lilac, rose bush, and peony

	/**
	 * The flower type.
	 */
	double_flower_type: FlowerType = FlowerType.Sunflower;

	/**
	 * If the upper half of the plant contained in this block.
	 */
	upper_block_bit: boolean = false;
}
