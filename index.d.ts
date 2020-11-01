/**
 * Key of an object.
 */
export type Key = keyof any;

/**
 * Dictionary mapping keys to values.
 */
export type Dictionary<V, K extends Key = string> = {
  [P in K]?: V;
};

/**
 * Dictionary mapping keys to values or nested dictionaries.
 */
export type DeepDictionary<V, K extends Key = string> = {
  [P in K]?: V | DeepDictionary<V, K>;
};
