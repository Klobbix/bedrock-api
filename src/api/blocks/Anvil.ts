export class Anvil {
	/**
	 * Damage state.
	 */
	damage: AnvilDamageType = AnvilDamageType.Undamaged;

	/**
	 * An anvil pointing north or south is aligned with its long dimension pointing north–south.
	 * An anvil pointing east or west is aligned with its long dimension pointing east–west.
	 * This value is 90° clockwise from the direction a player faces while placing an anvil.
	 * Value between 0-4.
	 * @default 0
	 */
	direction: number = 0;
}

/**
 * Represents the damaged state of an anvil.
 */
export enum AnvilDamageType {

	/**
	 * Broken Anvil (inaccessible, uses smooth texture)
	 */
	Broken = "broken",

	/**
	 * Slightly Damaged Anvil.
	 */
	SlightlyDamaged = "slightly_damaged",

	/**
	 * Anvil.
	 */
	Undamaged = "undamaged",

	/**
	 * Very Damaged Anvil.
	 */
	VeryDamaged = "very_damaged"
}

