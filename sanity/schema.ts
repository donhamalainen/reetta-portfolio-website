import { type SchemaTypeDefinition } from "sanity";

import tyonaytteet from "./schemaTypes/tyonaytteet";
import yhteistiedot from "./schemaTypes/yhteistiedot";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [tyonaytteet, yhteistiedot],
};
