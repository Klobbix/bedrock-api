import { LivingEntity } from "./LivingEntity";

export class ZombiePigman extends LivingEntity {

	/**
	 * Causes the zombie pigman to become angry or calm.
	 * @param value True to make the zombie pigman angry or false to calm it down
	 */
	setAngry(value: boolean): void {
		this.triggerEvent(value ? "minecraft:become_angry" : "minecraft:on_calm");
	}
}
