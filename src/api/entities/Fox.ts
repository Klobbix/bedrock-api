import { LivingEntity } from "./LivingEntity";
import { ComponentType } from "../types/ComponentType";

export class Fox extends LivingEntity {

	/**
	 * Returns true if the fox is a baby.
	 *
	 */
	isBaby(): boolean {
		let has = this.hasComponent(ComponentType.IsBaby);
		return has === null ? false : has;
	}

	/**
	 * Sets this fox to either be a baby or an adult.
	 * @param value True to turn the fox into a baby
	 */
	setBaby(value: boolean): void {
		this.triggerEvent(value ? "minecraft:entity_born" : "minecraft:ageable_grow_up");
	}

	/**
	 * Sets this fox to be sleeping or awake
	 * @param value True to sleep
	 */
	setSleeping(value: boolean): void {
		this.triggerEvent(value ? "minecraft:ambient_sleep" : "minecraft:ambient_normal");
	}
}
