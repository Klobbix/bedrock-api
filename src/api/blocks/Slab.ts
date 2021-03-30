import { WoodType } from "./types/WoodType";

export class Slab {
	/**
	 * If this slab is an upper slab.
	 */
	top_slot_bit: boolean = false;
}

export class StoneSlab extends Slab {

	/**
	 * The type of slab this is.
	 * Allowed values:
	 * brick
	 * cobblestone
	 * nether_brick
	 * quartz
	 * sandstone
	 * smooth_stone
	 * stone_brick
	 * wood
	 */
	stone_slab_type: SlabType = SlabType.SmoothStone;
}

export class StoneSlab2 extends Slab {

	/**
	 * The type of slab this is.
	 * Allowed values:
	 * mossy_cobblestone
	 * prismarine_brick
	 * prismarine_dark
	 * prismarine_rough
	 * purpur
	 * red_nether_brick
	 * red_sandstone
	 * smooth_sandstone
	 */
	stone_slab_type_2: SlabType = SlabType.RedSandstone;

}

export class StoneSlab3 extends Slab {

	/**
	 * The type of slab this is.
	 * Allowed values:
	 * andesite
	 * diorite
	 * end_stone_brick
	 * granite
	 * polished_andesite
	 * polished_diorite
	 * polished_granite
	 * smooth_red_sandstone
	 */
	stone_slab_type_3: SlabType = SlabType.EndStoneBrick;
}

export class StoneSlab4 extends Slab {

	/**
	 * The type of slab this is.
	 * Allowed values:
	 * cut_red_sandstone
	 * cut_sandstone
	 * mossy_stone_brick
	 * smooth_quartz
	 * stone
	 */
	stone_slab_type_4: SlabType = SlabType.MossyStoneBrick;
}

export class WoodSlab extends Slab {
	/**
	 * The type of slab this is.
	 */
	wood_type: WoodType = WoodType.Oak;
}

export enum SlabType {
	Andesite = "andesite",
	Brick = "brick",
	Cobblestone = "cobblestone",
	CutRedSandstone = "cut_red_sandstone",
	CutSandstone = "cut_sandstone",
	Diorite = "diorite",
	EndStoneBrick = "end_stone_brick",
	Granite = "granite",
	MossyCobblestone = "mossy_cobblestone",
	MossyStoneBrick = "mossy_stone_brick",
	NetherBrick = "nether_brick",
	PolishedAndesite = "polished_andesite",
	PolishedDiorite = "polished_diorite",
	PolishedGranite = "polished_granite",
	PrismarineBrick = "prismarine_brick",
	PrismarineDark = "prismarine_dark",
	PrismarineRough = "prismarine_rough",
	Purpur = "purpur",
	Quartz = "quartz",
	RedNetherBrick = "red_nether_brick",
	RedSandstone = "red_sandstone",
	Sandstone = "sandstone",
	SmoothQuartz = "smooth_quartz",
	SmoothRedSandstone = "smooth_red_sandstone",
	SmoothSandstone = "smooth_sandstone",
	SmoothStone = "smooth_stone",
	Stone = "stone",
	StoneBrick = "stone_brick",
	Wood = "wood"
}
