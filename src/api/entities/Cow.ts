import { LivingEntity } from "./LivingEntity";
import { ComponentType } from "../types/ComponentType";

export class Cow extends LivingEntity {
	/**
	 * Returns true if the cow is a baby.
	 *
	 */
	isBaby(): boolean {
		let has = this.hasComponent(ComponentType.IsBaby);
		return has === null ? false : has;
	}

	/**
	 * Sets this cow to either be a baby or an adult.
	 * @param value True to turn the cow into a baby
	 */
	setBaby(value: boolean): void {
		this.triggerEvent(value ? "minecraft:entity_born" : "minecraft:ageable_grow_up");
	}
}
