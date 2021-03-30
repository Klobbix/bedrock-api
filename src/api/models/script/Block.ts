declare interface Block {
	readonly __identifier__: string;
	readonly __type__: "block";
	readonly block_position: { x: number, y: number, z: number };
	readonly ticking_area: {};
}
