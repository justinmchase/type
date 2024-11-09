import { Type, type } from "./type.ts";

/**
 * Returns true if the type is Symbol.
 * @param value The value to check.
 * @returns {boolean} Returns true if the type is Symbol.
 * @example
 * ```ts
 * isSymbol(Type.Symbol); // true
 * isSymbol(Type.Object); // false
 * ```
 * @category Guards
 */
export function isSymbol(value: unknown): value is symbol {
  return type(value)[0] === Type.Symbol;
}

/**
 * Asserts that a type is Symbol.
 * @param type The type to check.
 * @throws {TypeError} Throws an error if the type is not a symbol.
 * @example
 * ```ts
 * assertSymbolType(Type.Symbol); // OK
 * assertSymbolType(Type.Object); // Throws: Type Object is not Symbol
 * ```
 * @category Assertion
 */
export function assertSymbolType(type: Type): asserts type is Type.Symbol {
  if (type !== Type.Symbol) {
    throw new TypeError(`Type ${type} is not Symbol`);
  }
}

/**
 * Asserts that a value is a symbol.
 * @param value The value to check.
 * @throws {TypeError} Throws an error if the value is not a symbol.
 * @example
 * ```ts
 * assertSymbol(Symbol()); // OK
 * assertSymbol({}); // Throws: Type object is not Symbol
 * ```
 * @category Assertion
 */
export function assertSymbol(value: unknown): asserts value is symbol {
  const [t] = type(value);
  assertSymbolType(t);
}
