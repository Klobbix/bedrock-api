import { LivingEntity } from "./LivingEntity";
import { ComponentType } from "../types/ComponentType";

export class Chicken extends LivingEntity {
	/**
	 * Returns true if the chicken is a baby.
	 *
	 */
	isBaby(): boolean {
		let has = this.hasComponent(ComponentType.IsBaby);
		return has === null ? false : has;
	}

	/**
	 * Sets this chicken to either be a baby or an adult.
	 * @param value True to turn the chicken into a baby
	 */
	setBaby(value: boolean): void {
		this.triggerEvent(value ? "minecraft:entity_born" : "minecraft:ageable_grow_up");
	}
}
