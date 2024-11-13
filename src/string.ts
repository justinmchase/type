import { Type, type } from "./type.ts";

/**
 * Returns true if the type is String.
 * @param value The value to check.
 * @returns {boolean} Returns true if the type is String.
 * @example
 * ```ts
 * isString(Type.String); // true
 * isString(Type.Object); // false
 * ```
 * @category Guards
 */
export function isString(value: unknown): value is string {
  return type(value)[0] === Type.String;
}

/**
 * Asserts that a type is String.
 * @param type The type to check.
 * @throws {TypeError} Throws an error if the type is not a string.
 * @example
 * ```ts
 * assertStringType(Type.String); // OK
 * assertStringType(Type.Object); // Throws: Type Object is not String
 * ```
 * @category Assertion
 */
export function assertStringType(type: Type): asserts type is Type.String {
  if (type !== Type.String) {
    throw new TypeError(`Type ${type} is not String`);
  }
}

/**
 * Asserts that a value is a string.
 * @param value The value to check.
 * @throws {TypeError} Throws an error if the value is not a string.
 * @example
 * ```ts
 * assertString(""); // OK
 * assertString({}); // Throws: Type object is not String
 * ```
 * @category Assertion
 */
export function assertString(value: unknown): asserts value is string {
  const [t] = type(value);
  assertStringType(t);
}

/**
 * Converts a value to a string.
 * @param value The value to convert.
 * @returns {string} Returns the string.
 * @example
 * ```ts
 * toString(1); // "1"
 * toString(true); // "true"
 * toString("hello"); // "hello"
 * ```
 * @category Conversion
 */
export function toString(value: unknown): string {
  const [t, v] = type(value);
  switch (t) {
    case Type.Array:
      return v.toString();
    case Type.BigInt:
      return v.toString();
    case Type.Boolean:
      return `${v}`;
    case Type.Date:
      return v.toString();
    case Type.Error:
      return v.toString();
    case Type.Function:
      return v.toString();
    case Type.Map:
      return v.toString();
    case Type.Null:
      return "null";
    case Type.Number:
      return `${v}`;
    case Type.Object:
      return v.toString();
    case Type.Set:
      return v.toString();
    case Type.String:
      return v;
    case Type.Symbol:
      return v.toString();
    case Type.Undefined:
      return "undefined";
  }
}
