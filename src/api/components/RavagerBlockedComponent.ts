/**
 * Defines the ravager's response to their melee attack being blocked.
 */
declare interface RavagerBlockedComponent {

	/**
	 * The strength with which blocking entities should be knocked back.
	 * @default 3.0
	 */
	knockback_strength: number;

	/**
	 * A list of weighted responses to the melee attack being blocked.
	 */
	reaction_choices: {
		weight: number;
		value: {
			event: string;
			target: string;
		};
	}[];
}
