export type ResolvedType =
  | { t: Type.Null; v: null }
  | { t: Type.Undefined; v: undefined }
  | { t: Type.BigInt; v: bigint }
  | { t: Type.Boolean; v: boolean }
  // deno-lint-ignore ban-types
  | { t: Type.Function; v: Function }
  | { t: Type.Number; v: number }
  | { t: Type.String; v: string }
  | { t: Type.Symbol; v: symbol }
  | { t: Type.Array; v: unknown[] }
  | { t: Type.Error; v: Error }
  | { t: Type.Object; v: Record<string, unknown> };

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
      return { t: Type.BigInt, v: value as bigint };
    case "boolean":
      return { t: Type.Boolean, v: value as boolean };
    case "function":
      // deno-lint-ignore ban-types
      return { t: Type.Function, v: value as Function };
    case "number":
      return { t: Type.Number, v: value as number };
    case "string":
      return { t: Type.String, v: value as string };
    case "symbol":
      return { t: Type.Symbol, v: value as symbol };
    case "undefined":
      return { t: Type.Undefined, v: undefined };
    case "object": {
      if (value === null) return { t: Type.Null, v: null };
      if (Array.isArray(value)) return { t: Type.Array, v: value as unknown[] };
      if (value instanceof Error) return { t: Type.Error, v: value as Error };
      return { t: Type.Object, v: value as Record<string, unknown> };
    }
  }
}
