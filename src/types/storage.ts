type BasicStorageValue = string | number | boolean;
export type StorageValue<T = BasicStorageValue> =
  | T
  | Record<string, T>
  | Array<T>;

export interface StorageEventDetail<T> {
  key: string;
  value: StorageValue<T>;
}
