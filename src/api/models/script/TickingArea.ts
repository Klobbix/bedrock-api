declare type TickingArea = LevelTickingArea | EntityTickingArea;

declare interface LevelTickingArea {
	readonly __type__: "level_ticking_area";
	readonly level_ticking_area_id: string;
}

declare interface EntityTickingArea {
	readonly __type__: "entity_ticking_area";
	readonly entity_ticking_area_id: number;
}
