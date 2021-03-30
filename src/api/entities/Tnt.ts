import { BedrockEntity } from "./BedrockEntity";

export class Tnt extends BedrockEntity {

	/**
	 * Primes the TNT to explode.
	 */
	explode(): void {
		this.triggerEvent("from_explosion");
	}
}
