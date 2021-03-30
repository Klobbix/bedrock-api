import { LivingEntity } from "./LivingEntity";

export class MagmaCube extends LivingEntity {

	/**
	 * Sets the magma cube to be aggressive or calm.
	 * @param value True if aggressive
	 */
	setAggressive(value: boolean): void {
		this.triggerEvent(value ? "minecraft:become_aggressive" : "minecraft:become_calm");
	}
}
