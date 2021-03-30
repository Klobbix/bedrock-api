import { Growth } from "./data/Growth";

export class SweetBerryBush implements Growth {

	/**
	 * 0-1: Young plant
	 * 2-3: No berries
	 * 4-6: Some berries, using the bush will give 1-2 sweet berries and set the age back to 1.
	 * 7: Full berries, using the bush will give 2-3 sweet berries and set the age back to 1.
	 * @default 0
	 */
	growth: number = 0;

}
