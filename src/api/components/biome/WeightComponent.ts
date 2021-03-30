/**
 * This component allows players to give a priority to how often that mob should spawn.
 * Mobs with lower weight values have a higher chance to spawn than mobs with higher weight values.
 */
declare interface WeightComponent {

	/**
	 * This is the priority of the mob spawning.
	 * @default 0.0
	 */
	default: number;
}
