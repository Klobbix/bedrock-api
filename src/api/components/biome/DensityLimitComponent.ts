/**
 * This component allows players to determine the density cap limits for the specified mob type.
 */
declare interface DensityLimitComponent {

	/**
	 * This is the maximum number of mobs of this type spawnable on the surface.
	 */
	surface: number;

	/**
	 * This is the maximum number of mobs of this type spawnable underground.
	 */
	underground: number;
}
