declare const server: Server;

declare interface Server {
	registerSystem<T extends ServerSystem<T> = VanillaServerSystem>(major: number, minor: number): T;

	log(message: string): void;

	level: Entity;
}
