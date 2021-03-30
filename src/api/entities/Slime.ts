import { LivingEntity } from "./LivingEntity";

export class Slime extends LivingEntity {

	/**
	 * Sets the slime to be aggressive or calm.
	 * @param value True if aggressive
	 */
	setAggressive(value: boolean): void {
		this.triggerEvent(value ? "minecraft:become_aggressive" : "minecraft:become_calm");
	}
}
