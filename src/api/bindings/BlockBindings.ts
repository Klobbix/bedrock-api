/**
 * Interface representing the bindings for a Minecraft Block.
 */
declare interface BlockBindings {

	getBlock(area: TickingArea, position: Vector): Block | null;

	getBlock(area: TickingArea, x: number, y: number, z: number): Block | null;

	getBlocks(area: TickingArea, min: Vector, max: Vector): Block[][][] | null;

	getBlocks(area: TickingArea, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): Block[][][] | null;

}
