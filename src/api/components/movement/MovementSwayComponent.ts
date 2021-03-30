/**
 * This move control causes the mob to sway side to side giving the impression it is swimming.
 */
declare interface MovementSwayComponent {

	/**
	 * The maximum number in degrees the mob can turn per tick.
	 * @default 30.0
	 */
	max_turn: number;
}
