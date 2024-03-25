import { type SchemaTypeDefinition } from "sanity";
import yhteistiedot from "./schemaTypes/yhteistiedot";

// Työnaytteet schemas
import projektit from "./schemaTypes/projektit";
import juttunaytteet from "./schemaTypes/juttunaytteet";
import kuvagalleria from "./schemaTypes/kuvagalleria";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [yhteistiedot, projektit, kuvagalleria, juttunaytteet],
};
