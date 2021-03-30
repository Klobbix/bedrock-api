import { BedrockEntity } from "./BedrockEntity";

export class EnderCrystal extends BedrockEntity {

	/**
	 * Explodes the ender crystal.
	 */
	explode(): void {
		this.triggerEvent("minecraft:crystal_explode");
	}
}
