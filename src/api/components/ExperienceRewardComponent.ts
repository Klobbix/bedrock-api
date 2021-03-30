/**
 * Declares the amount of experience this entity gives on death.
 */
declare interface ExperienceRewardComponent {

	/**
	 * A molang expression defining the amount of experience rewarded when this entity is successfully bred. An array of expressions adds each expression's result together for a final total.
	 */
	on_bred: number;

	/**
	 * A molang expression defining the amount of experience rewarded when this entity dies. An array of expressions adds each expression's result together for a final total.
	 */
	on_death: number;
}
