import { LivingEntity } from "./LivingEntity";
import { ComponentType } from "../types/ComponentType";

export class Bee extends LivingEntity {

	/**
	 * Returns true if the bee is a baby.
	 *
	 */
	isBaby(): boolean {
		let has = this.hasComponent(ComponentType.IsBaby);
		return has === null ? false : has;
	}

	/**
	 * Sets this bee to either be a baby or an adult.
	 * @param value True to turn the bee into a baby
	 */
	setBaby(value: boolean): void {
		this.triggerEvent(value ? "minecraft:entity_born" : "minecraft:ageable_grow_up");
	}

	/**
	 * Causes the bee to become angry or calm.
	 * @param value True to make the bee angry or false to calm it down
	 */
	setAngry(value: boolean): void {
		this.triggerEvent(value ? "attacked" : "calmed_down");
	}

	/**
	 * Causes the bee to think its hive has been destroyed.
	 */
	setHiveDestroyed(): void {
		this.triggerEvent("hive_destroyed");
	}

	/**
	 * Causes the bee to have obtained nectar.
	 */
	setCollectedNectar(): void {
		this.triggerEvent("collected_nectar");
	}

	/**
	 * Causes the bee to seek shelter.
	 */
	seekShelter(): void {
		this.triggerEvent("seek_shelter");
	}

	/**
	 * Causes the bee to stop panicking after a fire.
	 */
	stopPanicking(): void {
		this.triggerEvent("stop_panicking_after_fire");
	}

	/**
	 * Causes the bee to obtain 999 damage, ultimately killing it.
	 */
	perish(): void {
		this.triggerEvent("perish_event");
	}
}
