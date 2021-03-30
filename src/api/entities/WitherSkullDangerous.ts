import { BedrockEntity } from "./BedrockEntity";

export class WitherSkullDangerous extends BedrockEntity {

	/**
	 * Explodes the wither skull.
	 */
	explode(): void {
		this.triggerEvent("minecraft:explode");
	}
}
