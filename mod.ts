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

export function type(value: unknown): Type {
  switch (typeof value) {
    case "bigint":
      return Type.BigInt;
    case "boolean":
      return Type.Boolean;
    case "function":
      return Type.Function;
    case "number":
      return Type.Number;
    case "string":
      return Type.String;
    case "symbol":
      return Type.Symbol;
    case "undefined":
      return Type.Undefined;
    case "object": {
      if (value === null) return Type.Null;
      if (Array.isArray(value)) return Type.Array;
      if (value instanceof Error) return Type.Error;
      return Type.Object;
    }
    default:
      throw new TypeError(`Unknown type ${typeof value}`);
  }
}
