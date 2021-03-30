import { LivingEntity } from "./LivingEntity";

export class Silverfish extends LivingEntity {

	/**
	 * Sets the silverfish to become angry.
	 * @param value True to set angry, false to calm
	 */
	setAngry(value: boolean): void {
		this.triggerEvent(value ? "minecraft:become_angry" : "minecraft:on_calm");
	}
}
