import { LivingEntity } from "./LivingEntity";
import { ComponentType } from "../types/ComponentType";

export class Wolf extends LivingEntity {

	/**
	 * Returns true if the wolf is a baby.
	 *
	 */
	isBaby(): boolean {
		let has = this.hasComponent(ComponentType.IsBaby);
		return has === null ? false : has;
	}

	/**
	 * Sets this wolf to either be a baby or an adult.
	 * @param value True to turn the wolf into a baby
	 */
	setBaby(value: boolean): void {
		this.triggerEvent(value ? "minecraft:ageable_set_baby" : "minecraft:ageable_grow_up");
	}

	/**
	 * Causes the wolf to become angry or calm.
	 * @param value True to make the wolf angry or false to calm it down
	 */
	setAngry(value: boolean): void {
		this.triggerEvent(value ? "minecraft:become_angry" : "minecraft:on_calm");
	}

	/**
	 * Tames this wolf.
	 */
	tame(): void {
		this.triggerEvent("minecraft:on_tame");
	}
}
