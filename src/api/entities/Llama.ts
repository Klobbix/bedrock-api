import { LivingEntity } from "./LivingEntity";
import { ComponentType } from "../types/ComponentType";

export class Llama extends LivingEntity {

	/**
	 * Returns true if the llama is a baby.
	 *
	 */
	isBaby(): boolean {
		let has = this.hasComponent(ComponentType.IsBaby);
		return has === null ? false : has;
	}

	/**
	 * Sets this llama to either be a baby or an adult.
	 * @param value True to turn the llama into a baby
	 */
	setBaby(value: boolean): void {
		this.triggerEvent(value ? "minecraft:entity_born" : "minecraft:ageable_grow_up");
	}

	/**
	 * Tames the llama or makes it wild.
	 * @param value True to tame, false to set wild.
	 */
	setTamed(value: boolean): void {
		this.triggerEvent(value ? "minecraft:on_tame" : "minecraft:ageable_grow_up");
	}

	/**
	 * Sets whether or not the llama is in a caravan.
	 * @param value True to join a caravan
	 */
	setInCaravan(value: boolean): void {
		this.triggerEvent(value ? "minecraft:join_caravan" : "minecraft:leave_caravan");
	}

	/**
	 * Sets the llama to be angry or calm.
	 * @param value True to set angry
	 */
	setAngry(value: boolean): void {
		this.triggerEvent(value ? "minecraft:become_angry" : "minecraft:on_calm");
	}
}
