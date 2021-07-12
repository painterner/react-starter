

export abstract class BaseStorageService {
  /**
   * store date
   * @param key the key
   * @param obj the json object
   */
  abstract storeData(key: string, obj: any): Promise<void>;

  /**
   * get data
   * @param key
   */
  abstract getData<T>(key: string): Promise<T | null | undefined>;

  /**
   * remove data
   * @param key the key
   */
  abstract removeData(key: string): Promise<void>;
}
