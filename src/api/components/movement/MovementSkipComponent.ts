/**
 * This move control causes the mob to hop as it moves.
 */
declare interface MovementSkipComponent {

	/**
	 * The maximum number in degrees the mob can turn per tick.
	 * @default 30.0
	 */
	max_turn: number;
}
