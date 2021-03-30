/**
 * Defines genetics for an entity.
 * @see panda.json
 */
declare interface GeneticsComponent {
	/**
	 * Chance that an allele will be replaced with a random one instead of the parent's allele during birth.
	 * @default 0.03125
	 */
	mutation_rate: number;

	/**
	 * The list of genes that this entity has and will cross with a partner during breeding.
	 */
	genes: {
		name: string;
		allele_range: MinecraftRange;
		genetic_variants: {
			main_allele: number;
			birth_event: {
				event: string;
				target: string;
			}
		}[];
	}[];
}
