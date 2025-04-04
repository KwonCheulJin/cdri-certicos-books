import { LOCAL_STORAGE_KEY } from '@/types/constant';
import { StorageValue } from '@/types/storage';
import { storageManager } from '@/utils/localStorageManager';

export const searchStorage = {
  getKeywords: (): string[] => {
    return storageManager.getItem(LOCAL_STORAGE_KEY.storedKeywords) || [];
  },

  updateKeywords: (keywords: string[]) => {
    storageManager.setItem(LOCAL_STORAGE_KEY.storedKeywords, keywords);
  },

  subscribe: <T>(callback: (value: StorageValue<T>) => void) => {
    return storageManager.subscribe(LOCAL_STORAGE_KEY.storedKeywords, callback);
  },
};
