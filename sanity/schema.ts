import { type SchemaTypeDefinition } from "sanity";

import post from "./schemaTypes/tyonaytteet";
import cvSchema from "./schemaTypes/cv";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, cvSchema],
};
