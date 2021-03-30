import { ServerScript } from "../ServerScript";
import { ClientScript } from "../ClientScript";
import { EventType } from "../../types/EventType";

export class ParticleHelper {

	constructor(private script: ServerScript | ClientScript) {
	}

	/**
	 * This event is used to create a particle effect that will follow an entity around.
	 * This particle effect is only visible to the specific player that is running the client script where you fired the event.
	 * Any effect defined in a JSON file (both in your resource pack and in Minecraft) can be used here.
	 * MoLang variables defined in the JSON of the effect can then be used to control that effect by changing them in the entity to which it is attached.
	 * @param entity The entity object you want to attach the effect to
	 * @param effect The identifier of the particle effect you want to attach to the entity. This is the same name you gave the effect in its JSON file
	 * @param offset Optional - The offset from the entity's "center" where you want to spawn the effect
	 */
	spawnParticleOnEntity(entity: Entity, effect: string, offset: VectorArray = [0, 0, 0]) {
		this.script.broadcastEvent(EventType.SpawnParticleAttachedEntity, {effect: effect, offset: offset, entity: entity});
	}

	/**
	 * This event is used to create a static particle effect in the world.
	 * This particle effect is only visible to the specific player that is running the client script where you fired the event. Any effect defined in a JSON file (both in your resource pack and in Minecraft) can be used here.
	 * Once the effect is spawned you won't be able to control it further.
	 * Unlike the server version of the event, the client version will spawn the particle in the dimension the player is currently in.
	 * @param effect
	 * @param offset
	 * @param dimension
	 */
	spawnParticle(effect: string, offset: VectorArray = [0, 0, 0], dimension: string = "overworld") {
		this.script.broadcastEvent(EventType.SpawnParticleInWorld, {effect: effect, offset: offset, dimension: dimension});
	}
}
