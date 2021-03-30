/**
 * This move control allows the mob to swim in water and walk on land.
 */
declare interface MovementAmphibiousComponent {

	/**
	 * The maximum number in degrees the mob can turn per tick.
	 * @default 30.0
	 */
	max_turn: number;
}
