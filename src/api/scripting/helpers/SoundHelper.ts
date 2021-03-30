import { ServerScript } from "../ServerScript";
import { ClientScript } from "../ClientScript";
import { EventType } from "../../types/EventType";

export class SoundHelper {

	constructor(private script: ServerScript | ClientScript) {
	}

	/**
	 * Plays a sound effect at a given location.
	 * Currently, sounds can only be played at a fixed position in the world.
	 * Global sounds and sounds played by an entity will be supported in a later update.
	 *
	 * @param sound The identifier of the sound you want to play. Only sounds defined in the applied resource packs can be played
	 * @param volume The volume of the sound effect. A value of 1.0 will play the sound effect at the volume it was recorded at
	 * @param pitch The pitch of the sound effect. A value of 1.0 will play the sound effect with regular pitch
	 * @param position The position in the world to play the sound at
	 */
	playSound(sound: string, volume: number = 1.0, pitch: number = 1.0, position: VectorArray): void {
		this.script.broadcastEvent(EventType.PlaySound, {sound: sound, volume: volume, pitch: pitch, position: position});
	}
}
