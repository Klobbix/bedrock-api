import { Minecart } from "./Minecart";

export class TntMinecart extends Minecart {

	/**
	 * Primes the TNT.
	 * @param instant True if instant
	 */
	prime(instant: boolean) {
		this.triggerEvent(instant ? "minecraft:on_instant_prime" : "minecraft:on_prime");
	}
}
