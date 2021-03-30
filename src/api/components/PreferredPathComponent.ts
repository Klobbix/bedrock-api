/**
 * Specifies costing information for mobs that prefer to walk on preferred paths.
 */
declare interface PreferredPathComponent {

	/**
	 *  Cost for non-preferred blocks.
	 *  @default 0
	 */
	default_block_cost: number;

	/**
	 *  Added cost for jumping up a node.
	 *  @default 0
	 */
	jump_cost: number;

	/**
	 * Distance mob can fall without taking damage.
	 * @default 3
	 */
	max_fall_blocks: number;

	/**
	 * A list of blocks with their associated cost.
	 */
	preferred_path_blocks: {
		cost: number;
		block: string;
	}[];
}
