import { type SchemaTypeDefinition } from "sanity";
import release from "./schemas/releases";
import home from "./schemas/home";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [home, release],
};
