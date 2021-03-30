/**
 * A component that applies a mob effect to entities that get within range.
 */
declare interface MobEffectComponent {

	entity_filter: Filter;

	/**
	 * How close a hostile entity must be to have the mob effect applied.
	 * @default 0.2
	 */
	effect_range: number;

	/**
	 *  How long the applied mob effect lasts in seconds.
	 *  @default 10
	 */
	effect_time: number;

	/**
	 * The mob effect that is applied to entities that enter this entities effect range.
	 */
	mob_effect: string;

}
