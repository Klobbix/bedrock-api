/**
 * Allows the Entity to be tamed by mounting it.
 */
declare interface TamemountComponent {

	/**
	 * The amount the entity's temper will increase when mounted.
	 * @default 5
	 */
	attempt_temper_mod: number;

	/**
	 * The list of items that, if carried while interacting with the entity, will anger it.
	 */
	autoRejectItems: { item: string; };

	/**
	 *  The list of items that can be used to increase the entity's temper and speed up the taming process.
	 */
	feed_items: { item: string, temper_mod: number; };

	/**
	 * The text that shows in the feeding interact button.
	 */
	feed_text: string;

	/**
	 *  The maximum value for the entity's random starting temper.
	 *  @default 100
	 */
	max_temper: number;

	/**
	 * The minimum value for the entity's random starting temper.
	 * @default 0
	 */
	min_temper: number;

	/**
	 * The text that shows in the riding interact button.
	 */
	ride_text: string;

	/**
	 * Event that triggers when the entity becomes tamed.
	 */
	tame_event: string;

}
