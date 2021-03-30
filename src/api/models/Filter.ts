/**
 * A filter to compare entities with.
 * Example: { "test": "has_damage", "subject": "self", "operator": "equals", "value": "fatal" }
 */
declare interface Filter {
	all_of?: Filter[];
	any_of?: Filter[];

	test?: string;
	subject?: "other" | "parent" | "player" | "self" | "target";
	operator?: "!=" | "<" | "<=" | "<>" | "=" | "==" | ">" | ">=" | "equals" | "not";
	domain?: string;
	value?: any;
}
