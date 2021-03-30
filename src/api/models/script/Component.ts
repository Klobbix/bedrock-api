declare interface Component<T> {
	readonly __type__: "component";
	data: T;
}
