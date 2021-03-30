/**
 * Sets the speed multiplier for this entity's walk animation speed.
 */
declare interface WalkAnimationSpeedComponent {

	/**
	 * The higher the number, the faster the animation for walking plays. A value of 1.0 means normal speed, while 2.0 means twice as fast.
	 * @default 1.0
	 */
	value: number;
}
