import { LivingEntity } from "./LivingEntity";

export class Enderman extends LivingEntity {

	/**
	 * Sets the enderman to be angry or calm.
	 * @param value True to be angry
	 */
	setAngry(value: boolean): void {
		this.triggerEvent(value ? "minecraft:become_angry" : "minecraft:on_calm");
	}
}
