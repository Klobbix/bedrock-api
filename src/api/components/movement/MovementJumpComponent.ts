/**
 * Move control that causes the mob to jump as it moves with a specified delay between jumps.
 */
declare interface MovementJumpComponent {

	/**
	 * Delay after landing when using the slime move control.
	 * @default [0.0, 0.0]
	 */
	jump_delay: MinecraftRange;

	/**
	 * The maximum number in degrees the mob can turn per tick.
	 * @default 30.0
	 */
	max_turn: number;
}
