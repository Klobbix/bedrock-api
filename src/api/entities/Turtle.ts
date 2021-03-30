import { LivingEntity } from "./LivingEntity";
import { ComponentType } from "../types/ComponentType";

export class Turtle extends LivingEntity {
	/**
	 * Returns true if the turtle is a baby.
	 *
	 */
	isBaby(): boolean {
		let has = this.hasComponent(ComponentType.IsBaby);
		return has === null ? false : has;
	}

	/**
	 * Sets this turtle to either be a baby or an adult.
	 * @param value True to turn the turtle into a baby
	 */
	setBaby(value: boolean): void {
		this.triggerEvent(value ? "minecraft:entity_born" : "minecraft:ageable_grow_up");
	}

	/**
	 * Sets the turtle to become pregnant.
	 */
	becomePregnant(): void {
		this.triggerEvent("minecraft:become_pregnant");
	}

	/**
	 * Has the turtle lay an egg.
	 */
	layEgg(): void {
		this.triggerEvent("minecraft:go_lay_egg");
	}
}
