/**
 * Specifies hunt celebration behaviour.
 */
declare interface CelebrateHuntComponent {

	broadcast: boolean;
	celebration_targets: Filter;
	celebrate_sound: string;
	duration: number;
	radius: number;
	sound_interval: MinecraftRange;
}
