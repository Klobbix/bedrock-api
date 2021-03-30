/**
 * Despawns the Actor immediately.
 */
declare interface InstantDespawnComponent {

	/**
	 *  If true, all entities linked to this entity in a child relationship (eg. leashed) will also be despawned.
	 *  @default false
	 */
	remove_child_entities: boolean;
}
