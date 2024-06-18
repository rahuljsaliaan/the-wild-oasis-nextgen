// Utility type to make specified keys in a type partial
export type PartialProperties<T, K extends keyof T = keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;

export type NonNullableProperties<T> = {
  [P in keyof T]-?: NonNullable<T[P]>;
};

export type DynamicRouteParam<T extends Object> = { params: T };

export type GenerateMetadataFunc<T extends Object> = (
  params: DynamicRouteParam<T>
) => Promise<{ [key: string]: any } | void>;
