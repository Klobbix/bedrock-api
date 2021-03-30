import { LivingEntity } from "./LivingEntity";

export class CaveSpider extends LivingEntity {

	/**
	 * Sets this cave spider to become hostile or calm.
	 * @param value True to become hostile
	 */
	setAngry(value: boolean): void {
		this.triggerEvent(value ? "minecraft:become_angry" : "minecraft:on_calm");
	}

	/**
	 * Sets this cave spider to become hostile or calm.
	 * @param value True to become hostile
	 */
	setHostile(value: boolean): void {
		this.triggerEvent(value ? "minecraft:become_hostile" : "minecraft:become_neutral");
	}
}
