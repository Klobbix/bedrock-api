import { LivingEntity } from "./LivingEntity";
import { ComponentType } from "../types/ComponentType";

export class Cat extends LivingEntity {

	/**
	 * Returns true if the cat is a baby.
	 *
	 */
	isBaby(): boolean {
		let has = this.hasComponent(ComponentType.IsBaby);
		return has === null ? false : has;
	}

	/**
	 * Sets this cat to either be a baby or an adult.
	 * @param value True to turn the cat into a baby
	 */
	setBaby(value: boolean): void {
		this.triggerEvent(value ? "minecraft:entity_born" : "minecraft:ageable_grow_up");
	}

	/**
	 * Tames this cat.
	 */
	tame(): void {
		this.triggerEvent("minecraft:on_tame");
	}
}
