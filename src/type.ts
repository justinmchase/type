export type ResolvedType =
  | [Type.Null, null]
  | [Type.Undefined, undefined]
  | [Type.BigInt, bigint]
  | [Type.Boolean, boolean]
  // deno-lint-ignore ban-types
  | [Type.Function, Function]
  | [Type.Number, number]
  | [Type.String, string]
  | [Type.Symbol, symbol]
  | [Type.Array, unknown[]]
  | [Type.Error, Error]
  | [Type.Object, Record<string, unknown>];

export enum Type {
  Null = "null",
  Undefined = "undefined",
  BigInt = "bigint",
  Boolean = "boolean",
  Function = "function",
  Number = "number",
  String = "string",
  Symbol = "symbol",
  Array = "array",
  Error = "error",
  Object = "object",
}

export function type(value: unknown): ResolvedType {
  switch (typeof value) {
    case "bigint":
      return [Type.BigInt, value as bigint];
    case "boolean":
      return [Type.Boolean, value as boolean];
    case "function":
      // deno-lint-ignore ban-types
      return [Type.Function, value as Function];
    case "number":
      return [Type.Number, value as number];
    case "string":
      return [Type.String, value as string];
    case "symbol":
      return [Type.Symbol, value as symbol];
    case "undefined":
      return [Type.Undefined, undefined];
    case "object": {
      if (value === null) return [Type.Null, null];
      if (Array.isArray(value)) return [Type.Array, value as unknown[]];
      if (value instanceof Error) return [Type.Error, value as Error];
      return [Type.Object, value as Record<string, unknown>];
    }
  }
}
