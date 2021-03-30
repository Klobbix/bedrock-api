export class Leaves {
	/**
	 * The type of the leaf.
	 */
	old_leaf_type: LeavesType = LeavesType.Oak;

	/**
	 * If the block will stay regardless of having no wood nearby.
	 */
	persistent_bit: boolean = false;

	/**
	 * If the block will check for nearby wood.
	 */
	update_bit: boolean = false;

	//Leaves 2
	new_leaf_type: LeavesType = LeavesType.Acacia;
}

export enum LeavesType {
	Acacia = "acacia",
	Birch = "birch",
	DarkOak = "dark_oak",
	Jungle = "jungle",
	Oak = "oak",
	Spruce = "spruce",
}
