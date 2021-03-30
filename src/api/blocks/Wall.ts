export class Wall {
	/**
	 * The type of wall; for example, stone_brick denotes a stone brick wall.
	 */
	wall_block_type: WallType = WallType.Cobblestone;
}

export enum WallType {
	Andesite = "andesite",
	Brick = "brick",
	Cobblestone = "cobblestone",
	Diorite = "diorite",
	EndBrick = "end_brick",
	Granite = "granite",
	MossyCobblestone = "mossy_cobblestone",
	MossyStoneBrick = "mossy_stone_brick",
	NetherBrick = "nether_brick",
	Prismarine = "prismarine",
	RedNetherBrick = "red_nether_brick",
	RedSandstone = "red_sandstone",
	Sandstone = "sandstone",
	StoneBrick = "stone_brick"
}
