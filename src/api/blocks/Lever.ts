import { Openable } from "./data/Openable";

export class Lever implements Openable {

	/**
	 * 	If the lever is currently activated.
	 * 	@default 0
	 */
	open_bit: number = 0;

	/**
	 * The direction the lever is facing.
	 * @default ?
	 */
	lever_direction: LeverDirection;
}

export enum LeverDirection {
	DownEastWest = "down_east_west",
	DownNorthSouth = "down_north_south",
	East = "east",
	North = "north",
	South = "south",
	UpEastWest = "up_east_west",
	UpNorthSouth = "up_north_south",
	West = "west"
}
