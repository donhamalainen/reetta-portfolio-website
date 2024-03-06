import { type SchemaTypeDefinition } from "sanity";

import post from "./schemaTypes/tyonaytteet";
import home from "./schemaTypes/etusivu";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, home],
};
