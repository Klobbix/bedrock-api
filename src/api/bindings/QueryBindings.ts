/**
 * Interface representing the bindings for a Minecraft Query.
 */
declare interface QueryBindings {

	addFilterToQuery(query: Query, identifier: string): void;

	getEntitiesFromQuery(query: Query): Entity[] | null;

	getEntitiesFromQuery(query: Query, min1: number, min2: number, min3: number,
						 max1: number, max2: number, max3: number): Entity[] | null;

	registerQuery(): Query | null;

	registerQuery(component: string, field1?: string, field2?: string, field3?: string): Query | null;

}
