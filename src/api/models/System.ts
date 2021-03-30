declare interface System<T> {
	initialize(this: T): void;

	update(this: T): void;

	shutdown(this: T): void;
}
