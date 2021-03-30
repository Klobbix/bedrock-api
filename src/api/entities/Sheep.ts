import { LivingEntity } from "./LivingEntity";
import { ComponentType } from "../types/ComponentType";

export class Sheep extends LivingEntity {
	/**
	 * Returns true if the sheep is a baby.
	 *
	 */
	isBaby(): boolean {
		let has = this.hasComponent(ComponentType.IsBaby);
		return has === null ? false : has;
	}

	/**
	 * Sets this sheep to either be a baby or an adult.
	 * @param value True to turn the sheep into a baby
	 */
	setBaby(value: boolean): void {
		this.triggerEvent(value ? "minecraft:entity_born" : "minecraft:ageable_grow_up");
	}

	/**
	 * Sets a sheep as sheared.
	 * @param value True to shear
	 */
	setSheared(value: boolean): void {
		this.triggerEvent(value ? "on_sheared" : "minecraft:ageable_grow_up");
	}
}
