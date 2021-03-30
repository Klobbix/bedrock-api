export class SugarCane {

	/**
	 * A freshly-planted cane – and a cane which has just grown cane above it – each have an age of 0.
	 * The age is incremented at random intervals.
	 * At age 15, a cane may try to grow more cane above it.
	 * Allowed values: 0-15.
	 * @default 0
	 */
	age: number = 0;
}
