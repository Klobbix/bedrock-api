/**
 * Defines the entity's size interpolation based on the entity's age.
 */
declare interface ScaleByAgeComponent {

	/**
	 * Ending scale of the entity when it's fully grown.
	 * @default 1
	 */
	end_scale: number;

	/**
	 * Initial scale of the newborn entity.
	 * @default 1
	 */
	start_scale: number;

}
