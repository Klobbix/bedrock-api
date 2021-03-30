declare interface Entity {
	readonly __identifier__: string;
	readonly __type__: "entity" | "item_entity";
	readonly id: number;
}
