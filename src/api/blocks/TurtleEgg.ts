export class TurtleEgg {
	/**
	 * Number of eggs.
	 */
	turtle_egg_count: TurtleEggCountType = TurtleEggCountType.One;

	/**
	 * Determines how close an egg is to hatching; starts at no cracks and is randomly incremented.
	 */
	cracked_state: TurtleEggCrackedType = TurtleEggCrackedType.None;
}

export enum TurtleEggCountType {
	Four = "four_egg",
	One = "one_egg",
	Three = "three_egg",
	Two = "two_egg"
}

export enum TurtleEggCrackedType {
	Cracked = "cracked",
	Max = "max_cracked",
	None = "no_cracks"
}
