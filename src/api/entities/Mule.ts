import { LivingEntity } from "./LivingEntity";
import { ComponentType } from "../types/ComponentType";

export class Mule extends LivingEntity {

	/**
	 * Returns true if the mule is a baby.
	 *
	 */
	isBaby(): boolean {
		let has = this.hasComponent(ComponentType.IsBaby);
		return has === null ? false : has;
	}

	/**
	 * Sets this mule to either be a baby or an adult.
	 * @param value True to turn the mule into a baby
	 */
	setBaby(value: boolean): void {
		this.triggerEvent(value ? "minecraft:entity_born" : "minecraft:ageable_grow_up");
	}

	/**
	 * Sets the mule to be tamed.
	 */
	setTamed(): void {
		this.triggerEvent("minecraft:on_tame");
	}

	/**
	 * Sets the mule to be saddled.
	 * @param value True to saddle the mule
	 */
	setSaddled(value: boolean): void {
		this.triggerEvent(value ? "minecraft:mule_saddled" : "minecraft:mule_unsaddled");
	}
}
