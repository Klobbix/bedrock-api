import { LivingEntity } from "./LivingEntity";
import { ComponentType } from "../types/ComponentType";

export class Panda extends LivingEntity {

	/**
	 * Returns true if the panda is a baby.
	 *
	 */
	isBaby(): boolean {
		let has = this.hasComponent(ComponentType.IsBaby);
		return has === null ? false : has;
	}

	/**
	 * Sets this panda to either be a baby or an adult.
	 * @param value True to turn the panda into a baby
	 */
	setBaby(value: boolean): void {
		this.triggerEvent(value ? "minecraft:entity_born" : "minecraft:ageable_grow_up");
	}

	/**
	 * Sets the gene of the panda.
	 * @param gene The gene to give the panda
	 */
	setGene(gene: PandaGene) {
		this.triggerEvent(gene);
	}

}

export enum PandaGene {
	Aggressive = "minecraft:panda_aggressive",
	Brown = "minecraft:panda_brown",
	Lazy = "minecraft:panda_lazy",
	Playful = "minecraft:panda_playful",
	Weak = "minecraft:panda_weak",
	Worried = "minecraft:panda_worried"
}
