export class Torch {

	/**
	 * The direction the top of the torch is facing.
	 */
	torch_facing_direction: TorchDirection = TorchDirection.Top;
}

export enum TorchDirection {
	East = "east",
	North = "north",
	South = "south",
	Top = "top",
	Unknown = "unknown",
	West = "west"
}
