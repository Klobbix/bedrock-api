/**
 * Defines an entity's melee attack and any additional effects on it.
 */
declare interface AttackComponent {
	/**
	 * Range of the random amount of damage the melee attack deals. A negative value can heal the entity instead of hurting it.
	 */
	damage: MinecraftRange;

	/**
	 * Duration in seconds of the status ailment applied to the damaged entity.
	 * @default 0.0
	 */
	effect_duration: number;

	/**
	 * Identifier of the status ailment to apply to an entity attacked by this entity's melee attack.
	 */
	effect_name: string;
}
