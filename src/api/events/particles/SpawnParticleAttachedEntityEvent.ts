/**
 * This event is used to create a particle effect that will follow an entity around.
 * This particle effect is visible to all players. Any effect defined in a JSON file (both in your resource pack and in Minecraft) can be used here.
 * MoLang variables defined in the JSON of the effect can then be used to control that effect by changing them in the entity to which it is attached.
 */
declare interface SpawnParticleAttachedEntityEvent {
	/**
	 * The identifier of the particle effect you want to attach to the entity. This is the same identifier you gave the effect in its JSON file
	 */
	effect: string;
	/**
	 * The entity object you want to attach the effect to
	 */
	entity: Entity;
	/**
	 * The offset from the entity's "center" where you want to spawn the effect
	 * @default [0, 0, 0]
	 */
	offset: VectorArray;
}
