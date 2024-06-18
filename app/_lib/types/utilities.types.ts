// Utility type to make specified keys in a type partial
type PartialFields<T, K extends keyof T = keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;
