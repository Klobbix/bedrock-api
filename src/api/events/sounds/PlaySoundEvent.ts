/**
 * This event is used to play a sound effect. Currently, sounds can only be played at a fixed position in the world. Global sounds and sounds played by an entity will be supported in a later update.
 */
declare interface PlaySoundEvent {
	/**
	 * The pitch of the sound effect. A value of 1.0 will play the sound effect with regular pitch
	 * @default 1.0
	 */
	pitch: number;
	/**
	 * The position in the world we want to play the sound at
	 * @default [0, 0, 0]
	 */
	position: VectorArray;
	/**
	 * The identifier of the sound you want to play. Only sounds defined in the applied resource packs can be played
	 */
	sound: string;
	/**
	 * The volume of the sound effect. A value of 1.0 will play the sound effect at the volume it was recorded at
	 * @default 1.0
	 */
	volume: number;
}
