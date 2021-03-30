/**
 * Specifies the blocks that this entity can break as it moves around.
 */
declare interface BreakBlocksComponent {

	/**
	 * A list of the blocks that can be broken as this entity moves around.
	 */
	breakable_blocks: string[];
}
