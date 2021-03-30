import { LivingEntity } from "./LivingEntity";
import { ComponentType } from "../types/ComponentType";

export class Villager extends LivingEntity {

	/**
	 * Returns true if the villager is a baby.
	 *
	 */
	isBaby(): boolean {
		let has = this.hasComponent(ComponentType.IsBaby);
		return has === null ? false : has;
	}

	/**
	 * Sets this villager to either be a baby or an adult.
	 * @param value True to turn the villager into a baby
	 */
	setBaby(value: boolean): void {
		this.triggerEvent(value ? "minecraft:entity_born" : "minecraft:ageable_grow_up");
	}

	/**
	 * Transforms the villager into a witch.
	 */
	becomeWitch(): void {
		this.triggerEvent("become_witch");
	}

	/**
	 * Transforms the villager into a zombie.
	 */
	becomeZombie(): void {
		this.triggerEvent("become_zombie");
	}

}
