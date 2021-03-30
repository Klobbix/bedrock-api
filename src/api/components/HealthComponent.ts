/**
 * Defines the current and maximum possible health of the entity.
 * Upon applying the component back to the entity the health will change. If it reaches 0 or below the entity will die.
 */
declare interface HealthComponent {
	/**
	 * The maximum health the entity can heal
	 * @default 10
	 */
	max: number;
	/**
	 * Current health of the entity
	 * @default 1
	 */
	value: number;
}
