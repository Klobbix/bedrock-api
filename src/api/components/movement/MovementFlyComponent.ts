/**
 * This move control causes the mob to fly.
 */
declare interface MovementFlyComponent {

	/**
	 * The maximum number in degrees the mob can turn per tick.
	 * @default 30.0
	 */
	max_turn: number;
}
