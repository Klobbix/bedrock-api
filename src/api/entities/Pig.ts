import { LivingEntity } from "./LivingEntity";
import { ComponentType } from "../types/ComponentType";

export class Pig extends LivingEntity {

	/**
	 * Turns the pig into a zombie.
	 */
	becomeZombie() {
		this.triggerEvent("become_zombie");
	}

	/**
	 * Sets this pig to be saddled.
	 */
	saddle() {
		this.triggerEvent("minecraft:on_saddled");
	}

	/**
	 * Returns true if the pig is a baby.
	 *
	 */
	isBaby(): boolean {
		let has = this.hasComponent(ComponentType.IsBaby);
		return has === null ? false : has;
	}

	/**
	 * Sets this pig to either be a baby or an adult.
	 * @param value True to turn the pig into a baby
	 */
	setBaby(value: boolean): void {
		this.triggerEvent(value ? "minecraft:entity_born" : "minecraft:ageable_grow_up");
	}
}
