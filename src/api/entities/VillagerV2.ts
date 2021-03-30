import { LivingEntity } from "./LivingEntity";
import { ComponentType } from "../types/ComponentType";

export class VillagerV2 extends LivingEntity {

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

	/**
	 * Sets the type of the villager.
	 * @param type The VillagerType
	 */
	setType(type: VillagerType): void {
		this.triggerEvent(type);
	}
}

export enum VillagerType {
	Armorer = "minecraft:become_armorer",
	Butcher = "minecraft:become_butcher",
	Cartographer = "minecraft:become_cartographer",
	Cleric = "minecraft:become_cleric",
	Farmer = "minecraft:become_farmer",
	Fisherman = "minecraft:become_fisherman",
	Fletcher = "minecraft:become_fletcher",
	Leatherworker = "minecraft:become_leatherworker",
	Librarian = "minecraft:become_librarian",
	Mason = "minecraft:become_mason",
	Shepherd = "minecraft:become_sheperd",
	Toolsmith = "minecraft:become_toolsmith",
	Unskilled = "minecraft:become_unskilled",
	Weaponsmith = "minecraft:become_weaponsmith"
}
