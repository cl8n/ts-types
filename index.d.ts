/**
 * Dictionary mapping keys to values or nested dictionaries.
 */
export type DeepDictionary<V, K extends Key = string> = {
  [P in K]?: V | DeepDictionary<V, K>;
};

/**
 * Dictionary mapping keys to values.
 */
export type Dictionary<V, K extends Key = string> = {
  [P in K]?: V;
};

/**
 * Key of an object.
 */
export type Key = keyof any;
