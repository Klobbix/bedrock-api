/**
 * This event is used to create a static particle effect in the world.
 * This particle effect is visible to all players.
 * Any effect defined in a JSON file (both in your resource pack and in Minecraft) can be used here.
 * Once the effect is spawned you won't be able to control it further.
 */
declare interface SpawnParticleInWorldEvent {
	/**
	 * The dimension in which you want to spawn the effect. Can be "overworld", "nether", or "the end".
	 * Used only in server side scripting.
	 * @default overworld
	 */
	dimension?: string;
	/**
	 * The identifier of the particle effect you want to attach to spawn. This is the same name you gave the effect in its JSON file
	 */
	effect: string;
	/**
	 * The position in the world where you want to spawn the effect
	 * @default [0, 0, 0]
	 */
	position: VectorArray;
}
