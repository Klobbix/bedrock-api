export class StructureBlock {
	mode: StructureType = StructureType.Data;

	/**
	 * Allowed values: air, void.
	 * @default void
	 */
	structure_void_type: string = "void";
}

export enum StructureType {
	Corner = "corner",
	Data = "data",
	Export = "export",
	Invalid = "invalid",
	Load = "load",
	Save = "save"
}
