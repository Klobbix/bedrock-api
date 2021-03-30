import { LivingEntity } from "./LivingEntity";
import { ComponentType } from "../types/ComponentType";

export class Drowned extends LivingEntity {

	/**
	 * Returns true if the drowned is a baby.
	 *
	 */
	isBaby(): boolean {
		let has = this.hasComponent(ComponentType.IsBaby);
		return has === null ? false : has;
	}

	/**
	 * Sets this drowned to either be a baby or an adult.
	 * @param value True to turn the drowned into a baby
	 */
	setBaby(value: boolean): void {
		this.triggerEvent(value ? "minecraft:as_baby" : "minecraft:as_adult");
	}

	/**
	 * Sets the attack mode of the drowned entity.
	 * @param melee True to use melee, false to use ranged
	 */
	setAttackMode(melee: boolean): void {
		this.triggerEvent(melee ? "minecraft:switch_to_melee" : "minecraft:switch_to_ranged");
	}

	/**
	 * Sets the wandering mode of the drowned entity.
	 * @param wander True to wander, false to use hunter mode
	 */
	setWandering(wander: boolean): void {
		this.triggerEvent(wander ? "minecraft:lost_target" : "minecraft:has_target");
	}

}
