import { Growth } from "./data/Growth";

export class MelonStem implements Growth {

	/**
	 * 0 - A newly-planted stem.
	 * 1-6: Intermediate growth stages of the stem.
	 * 7: A fully-mature stem, capable of producing melons.
	 */
	growth: number = 0;

}
