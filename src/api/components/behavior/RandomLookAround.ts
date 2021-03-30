/**
 * Allows the mob to randomly look around.
 */
declare interface RandomLookAround {
	/**
	 * The range of time in seconds the mob will stay looking in a random direction before looking elsewhere.
	 * @default [2,4]
	 */
	look_time: MinecraftRange;
}
