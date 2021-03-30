/**
 * Enables the mob to admire items that have been configured as admirable. Must be used in combination with the admire_item component.
 */
declare interface AdmireItem {

	/**
	 * The sound event to play when admiring the item.
	 */
	admire_item_sound: string;

	/**
	 * The range of time in seconds to randomly wait before playing the sound again.
	 * @default 0
	 */
	sound_interval: MinecraftRange;

}
