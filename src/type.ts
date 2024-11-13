/**
 * Represents a function that takes any number of arguments and returns an unknown value.
 */
export type Func = (...args: unknown[]) => unknown;

/**
 * Represents a type and its value.
 */
export type ResolvedType =
  | [Type.Null, null]
  | [Type.Undefined, undefined]
  | [Type.BigInt, bigint]
  | [Type.Boolean, boolean]
  | [Type.Function, Func]
  | [Type.Number, number]
  | [Type.String, string]
  | [Type.Symbol, symbol]
  | [Type.Array, unknown[]]
  | [Type.Error, Error]
  | [Type.Object, Record<string, unknown>]
  | [Type.Map, Map<unknown, unknown>]
  | [Type.Set, Set<unknown>]
  | [Type.Date, Date];

/**
 * The Type enum represents all the possible primitive types.
 */
export enum Type {
  /**
   * Represents the null type.
   */
  Null = "null",
  /**
   * Represents the undefined type.
   */
  Undefined = "undefined",
  /**
   * Represents the bigint type.
   */
  BigInt = "bigint",
  /**
   * Represents the boolean type.
   */
  Boolean = "boolean",
  /**
   * Represents the function type.
   */
  Function = "function",
  /**
   * Represents the number type.
   */
  Number = "number",
  /**
   * Represents the string type.
   */
  String = "string",
  /**
   * Represents the symbol type.
   */
  Symbol = "symbol",
  /**
   * Represents the array type.
   */
  Array = "array",
  /**
   * Represents the error type.
   */
  Error = "error",
  /**
   * Represents the object type.
   */
  Object = "object",
  /**
   * Represents the Map type.
   */
  Map = "map",
  /**
   * Represents the Set type.
   */
  Set = "set",
  /**
   * Represents the Date type.
   */
  Date = "date",
}

/**
 * Returns the type and value of a value.
 * @param value The value to check.
 * @returns {ResolvedType} Returns the type and value of the value.
 * @example
 * ```ts
 * type(null); // [Type.Null, null]
 * type(undefined); // [Type.Undefined, undefined]
 * type(1n); // [Type.BigInt, 1n]
 * type(true); // [Type.Boolean, true]
 * type(() => {}); // [Type.Function, () => {}]
 * type(1); // [Type.Number, 1]
 * type("hello"); // [Type.String, "hello"]
 * type(Symbol()); // [Type.Symbol, Symbol()]
 * type([]); // [Type.Array, []]
 * type(new Error("error")); // [Type.Error, Error: error]
 * type({}); // [Type.Object, {}]
 * type(new Map()); // [Type.Map, Map {}]
 * type(new Set()); // [Type.Set, Set {}]
 * type(new Date()); // [Type.Date, Date {}]
 * ```
 * @category Type
 */
export function type(value: unknown): ResolvedType {
  switch (typeof value) {
    case "bigint":
      return [Type.BigInt, value as bigint];
    case "boolean":
      return [Type.Boolean, value as boolean];
    case "function":
      return [Type.Function, value as Func];
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
      if (value instanceof Map) {
        return [Type.Map, value as Map<unknown, unknown>];
      }
      if (value instanceof Set) return [Type.Set, value as Set<unknown>];
      if (value instanceof Date) return [Type.Date, value as Date];
      return [Type.Object, value as Record<string, unknown>];
    }
  }
}

/**
 * Returns true if the type is a reference type.
 * @param value The value to check.
 * @returns {boolean} Returns true if the type is a reference type.
 * @example
 * ```ts
 * isReference({}); // true
 * isReference([]); // true
 * isReference(new Error()); // true
 * isReference(() => {}); // true
 * isReference(new Map()); // true
 * isReference(new Set()); // true
 * isReference(new Date()); // true
 * isReference(null); // false
 * isReference(undefined); // false
 * isReference(1); // false
 * isReference(true); // false
 * isReference("hello"); // false
 * isReference(Symbol()); // false
 * isReference(1n); // false
 * ```
 * @category Guards
 */
export function isReference(t: Type): boolean {
  switch (t) {
    case Type.Object:
    case Type.Array:
    case Type.Error:
    case Type.Function:
    case Type.Map:
    case Type.Set:
    case Type.Date:
      return true;
    default:
      return false;
  }
}