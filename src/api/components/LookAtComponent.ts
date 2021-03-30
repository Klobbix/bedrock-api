/**
 * Defines the behavior when another entity looks at this entity.
 */
declare interface LookAtComponent {
	/**
	 * If true, invulnerable entities (e.g. Players in creative mode) are considered valid targets
	 * @default false
	 */
	allow_invulnerable: boolean;
	/**
	 * Defines the entities that can trigger this component
	 * @default player
	 */
	filters?: Filter;
	/**
	 * The range for the random amount of time during which the entity is 'cooling down' and won't get angered or look for a target
	 * @default [0.0, 0.0]
	 */
	look_cooldown: MinecraftRange;
	/**
	 * The event identifier to run when the entities specified in filters look at this entity
	 */
	look_event: string;
	/**
	 * Maximum distance this entity will look for another entity looking at it
	 * @default 10.0
	 */
	search_radius: number;
	/**
	 * If true, this entity will set the attack target as the entity that looked at it
	 * @default true
	 */
	set_target: boolean;
}
