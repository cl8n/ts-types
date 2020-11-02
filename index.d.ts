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
 * Empty value of the given type. Types with no logical empty or default are unchanged.
 *
 * @example
 * type N = Empty<number>; // 0
 * type S = Empty<string>; // ''
 * type A = Empty<ExampleType[]>; // []
 * type O = Empty<{ num: number }>; // { num: 0 }
 */
export type Empty<T> = T extends boolean
  ? false
  : T extends number
  ? 0
  : T extends string
  ? ''
  : T extends null | undefined
  ? T
  : T extends unknown[]
  ? []
  : {
      [P in keyof T]: Empty<T[P]>;
    };

/**
 * Key of an object.
 */
export type Key = keyof any;
