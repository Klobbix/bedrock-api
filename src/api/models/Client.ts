declare const client: Client;

declare interface Client {
	registerSystem<T extends ClientSystem<T> = VanillaClientSystem>(major: number, minor: number): T;

	log(message: string): void;
}
