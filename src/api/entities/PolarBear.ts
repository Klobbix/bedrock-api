import { LivingEntity } from "./LivingEntity";
import { ComponentType } from "../types/ComponentType";

export class PolarBear extends LivingEntity {

	/**
	 * Returns true if the polar bear is a baby.
	 *
	 */
	isBaby(): boolean {
		let has = this.hasComponent(ComponentType.IsBaby);
		return has === null ? false : has;
	}

	/**
	 * Sets this polar bear to either be a baby or an adult.
	 * @param value True to turn the polar bear into a baby
	 */
	setBaby(value: boolean): void {
		this.triggerEvent(value ? "minecraft:entity_born" : "minecraft:ageable_grow_up");
	}

	/**
	 * Sets the polar bear to be angry.
	 * @param value True if angry
	 */
	setAngry(value: boolean): void {
		this.triggerEvent(value ? "minecraft:on_anger" : "minecraft:on_calm");
	}

}
