/**
 * This move control allows a mob to fly, swim, climb, etc.
 */
declare interface MovementGenericComponent {

	/**
	 * The maximum number in degrees the mob can turn per tick.
	 * @default 30.0
	 */
	max_turn: number;
}
