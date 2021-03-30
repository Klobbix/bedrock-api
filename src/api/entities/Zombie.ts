import { LivingEntity } from "./LivingEntity";
import { ComponentType } from "../types/ComponentType";

export class Zombie extends LivingEntity {

	/**
	 * Returns true if the zombie is a baby.
	 *
	 */
	isBaby(): boolean {
		let has = this.hasComponent(ComponentType.IsBaby);
		return has === null ? false : has;
	}

	/**
	 * Sets this zombie to either be a baby or an adult.
	 * @param value True to turn the zombie into a baby
	 */
	setBaby(value: boolean): void {
		this.triggerEvent(value ? "minecraft:as_baby" : "minecraft:as_adult");
	}

	/**
	 * Transforms the zombie into a drowned.
	 * @param value True to start the transformation
	 */
	transform(value: boolean) {
		this.triggerEvent(value ? "minecraft:start_transforming" : "minecraft:stop_transforming");
	}
}
