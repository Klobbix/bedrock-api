import { LivingEntity } from "./LivingEntity";

export class Pufferfish extends LivingEntity {

	/**
	 * Sets the state of this pufferfish.
	 * @param state The pufferfish state
	 */
	setState(state: PufferfishState): void {
		this.triggerEvent(state);
	}
}

export enum PufferfishState {
	Deflate = "minecraft:from_full_puff",
	Deflated = "minecraft:on_deflate",
	FullPuff = "minecraft:on_full_puff",
	Normal = "minecraft:on_normal_puff",
	Puff = "minecraft:to_full_puff"
}
