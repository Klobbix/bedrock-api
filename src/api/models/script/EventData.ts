declare interface EventData<T> {
	readonly __type__: "event_data";
	readonly __identifier__: string;
	data: T;
}

