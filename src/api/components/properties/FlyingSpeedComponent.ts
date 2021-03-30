/**
 * Defines the flying speed of an entity.
 */
declare interface FlyingSpeedComponent {
	/**
	 * Flying speed in blocks per tick.
	 * Decimal value between 0 and 1.
	 * @default 0.02
	 */
	value: number;
}
