import { LivingEntity } from "./LivingEntity";
import { ComponentType } from "../types/ComponentType";

export class Donkey extends LivingEntity {

	/**
	 * Returns true if the donkey is a baby.
	 *
	 */
	isBaby(): boolean {
		let has = this.hasComponent(ComponentType.IsBaby);
		return has === null ? false : has;
	}

	/**
	 * Sets this donkey to either be a baby or an adult.
	 * @param value True to turn the donkey into a baby
	 */
	setBaby(value: boolean): void {
		this.triggerEvent(value ? "minecraft:entity_born" : "minecraft:ageable_grow_up");
	}

	/**
	 * Sets the donkey to be tamed.
	 */
	setTamed(): void {
		this.triggerEvent("minecraft:on_tame");
	}

	/**
	 * Sets the donkey to be saddled.
	 * @param value True to saddle the donkey
	 */
	setSaddled(value: boolean): void {
		this.triggerEvent(value ? "minecraft:donkey_saddled" : "minecraft:donkey_unsaddled");
	}

}
