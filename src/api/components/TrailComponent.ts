/**
 * Causes an entity to leave a trail of blocks as it moves about the world.
 */
declare interface TrailComponent {

	/**
	 * The type of block you wish to be spawned by the entity as it move about the world. Solid blocks may not be spawned at an offset of (0,0,0).
	 */
	block_type: string;

	/**
	 * One or more conditions that must be met in order to cause the chosen block type to spawn.
	 */
	spawn_filter: Filter;

	/**
	 * The distance from the entities current position to spawn the block. Capped at up to 16 blocks away. The X value is left/right(-/+), the Z value is backward/forward(-/+), the Y value is below/above(-/+).
	 * @default [0, 0, 0]
	 */
	spawn_offset: VectorArray;
}

