/**
 * Defines the entity's strength to carry items.
 */
declare interface StrengthComponent {

	/**
	 * The maximum strength of this entity.
	 * @default 5
	 */
	max: number;

	/**
	 * The initial value of the strength.
	 * @default 1
	 */
	min: number;
}
