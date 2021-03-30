/**
 * Causes the mob to ignore attackable targets for a given duration.
 */
declare interface AdmireItemComponent {

	/**
	 * Duration, in seconds, for which mob won't admire items if it was hurt.
	 * @default 0
	 */
	cooldown_after_being_attacked: number;

	/**
	 * Duration, in seconds, that the mob is pacified.
	 * @default 10
	 */
	duration: number;
}
