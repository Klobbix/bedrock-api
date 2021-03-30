import { LivingEntity } from "./LivingEntity";

export class Spider extends LivingEntity {
	/**
	 * Sets this spider to become hostile or neutral.
	 * @param value True to become hostile
	 */
	setHostile(value: boolean): void {
		this.triggerEvent(value ? "minecraft:become_hostile" : "minecraft:become_neutral");
	}

	/**
	 * Sets this spider to become angry or calm.
	 * @param value True to become angry
	 */
	setAngry(value: boolean): void {
		this.triggerEvent(value ? "minecraft:become_angry" : "minecraft:become_calm");
	}
}
