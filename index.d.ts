/**
 * Key of an object.
 */
export type Key = keyof any;

/**
 * Dictionary mapping keys to values.
 */
export type Dictionary<T, K extends Key = string> = {
  [P in K]?: T;
};

/**
 * Dictionary mapping keys to values or nested dictionaries.
 */
export type DeepDictionary<T, K extends Key = string> = {
  [P in K]?: T | DeepDictionary<T, K>;
};
