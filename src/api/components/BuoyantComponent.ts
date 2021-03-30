/**
 * Enables an entity to float on the specified liquid blocks.
 */
declare interface BuoyantComponent {

	/**
	 *  Applies gravity each tick. Causes more of a wave simulation, but will cause more gravity to be applied outside liquids.
	 *  @default true
	 */
	apply_gravity: boolean;

	/**
	 * Base buoyancy used to calculate how much will a mob float.
	 * @default 1.0
	 */
	base_buoyancy: number;

	/**
	 * Probability for a big wave hitting the entity. Only used if `simulate_waves` is true.
	 * @default 0.03
	 */
	big_wave_probability: number;

	/**
	 * Multiplier for the speed to make a big wave. Triggered depending on 'big_wave_probability'.
	 * @default 10.0
	 */
	big_wave_speed: number;

	/**
	 *  How much an actor will be dragged down when the Buoyancy Component is removed.
	 *  @default 0.0
	 */
	drag_down_on_buoyancy_removed: number;

	/**
	 * List of blocks this entity can float on. Must be a liquid block.
	 */
	liquid_blocks: string[];

	/**
	 * Should the movement simulate waves going through.
	 * @default true
	 */
	simulate_waves: boolean;
}
