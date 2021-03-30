import { LivingEntity } from "./LivingEntity";

export class Tropicalfish extends LivingEntity {

	/**
	 * Sets the type of the tropical fish.
	 * @param type The TropicalFishType
	 */
	setType(type: TropicalfishType): void {
		this.triggerEvent(type);
	}
}

export enum TropicalfishType {
	Anenome = "minecraft:become_anenonme",
	BlackTang = "minecraft:become_black_tang",
	BlueDory = "minecraft:become_blue_dory",
	ButterflyFish = "minecraft:become_butterfly_fish",
	Cichlid = "minecraft:become_cichlid",
	Clownfish = "minecraft:become_clownfish",
	CCBetta = "minecraft:become_cc_betta",
	DogFish = "minecraft:become_dog_fish",
	ERedSnapper = "minecraft:become_e_red_snapper",
	GoatFish = "minecraft:become_goat_fish",
	MoorishIdol = "minecraft:become_moorish_idol",
	OrnateButterfly = "minecraft:become_ornate_butterfly",
	ParrotFish = "minecraft:become_parrot_fish",
	QueenAngelFish = "minecraft:become_queen_angel_fish",
	RedCichlid = "minecraft:become_red_cichlid",
	RedLippedBenny = "minecraft:become_red_lipped_benny",
	RedSnapper = "minecraft:become_red_snapper",
	Threadfin = "minecraft:become_threadfin",
	TomatoClown = "minecraft:become_tomato_clown",
	Triggerfish = "minecraft:become_triggerfish",
	YellowTang = "minecraft:become_yellow_tang",
	YellowTailParrot = "minecraft:become_yellow_tail_parrot",
}
