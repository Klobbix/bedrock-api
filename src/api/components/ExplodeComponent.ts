/**
 * Controls the entity's explosion, timer until the explosion, and whether the timer is counting down or not.
 */
declare interface ExplodeComponent {
	/**
	 * If true, the explosion will destroy blocks in the explosion radius
	 * @default true
	 */
	breaks_blocks: boolean;
	/**
	 * If true, blocks in the explosion radius will be set on fire
	 * @default false
	 */
	causes_fire: boolean;
	/**
	 * If true, whether the explosion breaks blocks is affected by the mob griefing game rule
	 * @default false
	 */
	destroy_affected_by_griefing: boolean;
	/**
	 * If true, whether the explosion causes fire is affected by the mob griefing game rule
	 * @default false
	 */
	fire_affected_by_griefing: boolean;
	/**
	 * The range for the random amount of time the fuse will be lit before exploding, a negative value means the explosion will be immediate
	 * @default [0.0, 0.0]
	 */
	fuse_length: MinecraftRange;
	/**
	 * If true, the fuse is already lit when this component is added to the entity
	 * @default false
	 */
	fuse_lit: boolean;
	/**
	 * A blocks explosion resistance will be capped at this value when an explosion occurs
	 * @default Infinite
	 */
	max_resistance: number;
	/**
	 * The radius of the explosion in blocks and the amount of damage the explosion deals
	 * @default 3
	 */
	power: number;
}
