import { LivingEntity } from "./LivingEntity";
import { ComponentType } from "../types/ComponentType";

export class Horse extends LivingEntity {

	/**
	 * Returns true if the horse is a baby.
	 *
	 */
	isBaby(): boolean {
		let has = this.hasComponent(ComponentType.IsBaby);
		return has === null ? false : has;
	}

	/**
	 * Sets this horse to either be a baby or an adult.
	 * @param value True to turn the horse into a baby
	 */
	setBaby(value: boolean): void {
		this.triggerEvent(value ? "minecraft:entity_born" : "minecraft:ageable_grow_up");
	}

	/**
	 * Tames the horse or makes it wild.
	 * @param value True to tame, false to set wild.
	 */
	setTamed(value: boolean): void {
		this.triggerEvent(value ? "minecraft:on_tame" : "minecraft:ageable_grow_up");
	}

	/**
	 * Saddles the horse.
	 * @param value True to saddle
	 */
	setSaddled(value: boolean): void {
		this.triggerEvent(value ? "minecraft:horse_saddled" : "minecraft:horse_unsaddled");
	}

	/**
	 * Sets the color of the horse.
	 * @param color The color to give the horse
	 */
	setColor(color: HorseColor): void {
		this.triggerEvent(color);
	}
}

export enum HorseColor {
	Black = "minecraft:make_black",
	Brown = "minecraft:make_brown",
	Chestnut = "minecraft:make_chestnut",
	Creamy = "minecraft:make_creamy",
	Gray = "minecraft:make_gray",
	DarkBrown = "minecraft:make_darkbrown",
	White = "minecraft:make_white",
}
