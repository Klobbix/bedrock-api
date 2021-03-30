export abstract class AbstractSystem<T extends System<T>> {
	private aSystem: T;

	constructor(system: T) {
		this.aSystem = system;
		this.aSystem.initialize = this.initialize.bind(this);
		this.aSystem.update = this.update.bind(this);
		this.aSystem.shutdown = this.shutdown.bind(this);
	}

	protected abstract initialize(): void;

	protected abstract update(): void;

	protected abstract shutdown(): void;

	abstract system(): T;

}
