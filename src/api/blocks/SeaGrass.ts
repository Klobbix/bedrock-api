export class SeaGrass {
	sea_grass_type: SeaGrassType = SeaGrassType.Default;
}

export enum SeaGrassType {
	Default = "default", //This is seagrass
	DoubleBot = "double_bot", //This is the bottom half of the tall seagrass
	DoubleTop = "double_top" //This is the top half of the tall seagrass
}
