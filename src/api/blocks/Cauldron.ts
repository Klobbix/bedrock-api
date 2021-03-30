export class Cauldron {
	/**
	 * Liquid level in a cauldron, 0 is empty and 6 is full.
	 * Allowed Values: 0-6.
	 * @default 0.
	 */
	fill_level: number = 0;

	/**
	 * Whether the cauldron contains water or lava.
	 * Allowed Values: water, lava
	 */
	cauldron_liquid: string = "water";
}
