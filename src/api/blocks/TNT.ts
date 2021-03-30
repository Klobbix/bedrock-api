export class TNT {

	/**
	 * false - This is normal TNT.
	 * true - This is Underwater TNT.
	 */
	allow_underwater_bit: boolean = false;

	/**
	 * false - Hitting the TNT block breaks it, dropping it as an item that can be picked up.
	 * true - Hitting the TNT block causes it to ignite and then explode.
	 */
	explode_bit: boolean = false;
}
