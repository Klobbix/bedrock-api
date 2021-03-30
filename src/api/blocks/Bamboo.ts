export class Bamboo {
	/**
	 * The stage is incremented at random intervals.
	 * At stage 1, bamboo may try to grow more bamboo above it.
	 * @default 0
	 */
	age_bit: number = 0;

	/**
	 * The size of the leaves on this bamboo block.
	 * @default no_leaves
	 */
	bamboo_leaf_size: BambooLeafType = BambooLeafType.None;

	/**
	 * The age of the bamboo, if this is 1 the bamboo appears thicker.
	 * Allowed values: thick, thin.
	 * @default thin
	 */
	bamboo_stalk_thickness: string = "thin";
}

export enum BambooLeafType {
	Large = "large_leaves",
	None = "no_leaves",
	Small = "small_leaves"
}
