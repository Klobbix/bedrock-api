import { BedrockEntity } from "./BedrockEntity";

export class Fireball extends BedrockEntity {

	/**
	 * Sets this fireball to explode.
	 */
	explode(): void {
		this.triggerEvent("minecraft:explode");
	}
}
