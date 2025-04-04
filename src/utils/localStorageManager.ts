import { StorageEventDetail, StorageValue } from '@/types/storage';

class LocalStorageManager {
  private static instance: LocalStorageManager;
  private readonly STORAGE_UPDATE_EVENT = 'localStorageUpdate';

  private constructor() {}

  static getInstance(): LocalStorageManager {
    if (!LocalStorageManager.instance) {
      LocalStorageManager.instance = new LocalStorageManager();
    }
    return LocalStorageManager.instance;
  }

  setItem<T>(key: string, value: StorageValue<T>) {
    try {
      const existingValue = this.getItem<T>(key);
      if (JSON.stringify(existingValue) === JSON.stringify(value)) {
        return;
      }
      localStorage.setItem(key, JSON.stringify(value));
      this.dispatchUpdateEvent(key, value);
    } catch (error) {
      console.error(
        `로컬 스토리지에 "${key}" 키로 데이터를 저장하는 데 실패했습니다:`,
        error
      );
    }
  }

  getItem<T>(key: string): T | null {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error(
        `로컬 스토리지에서 "${key}" 키의 데이터를 가져오는 데 실패했습니다:`,
        error
      );
      return null;
    }
  }

  private dispatchUpdateEvent<T>(key: string, value: StorageValue<T>) {
    window.dispatchEvent(
      new CustomEvent<StorageEventDetail<T>>(this.STORAGE_UPDATE_EVENT, {
        detail: { key, value },
      })
    );
  }

  subscribe<T>(key: string, callback: (value: StorageValue<T>) => void) {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key) {
        try {
          callback(e.newValue ? JSON.parse(e.newValue) : null);
        } catch (error) {
          console.error(
            `로컬 스토리지 이벤트에서 "${key}" 키의 데이터를 파싱하는 데 실패했습니다:`,
            error
          );
        }
      }
    };

    const handleCustomEvent = (e: CustomEvent<StorageEventDetail<T>>) => {
      if (e.detail.key === key) {
        callback(e.detail.value);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener(
      this.STORAGE_UPDATE_EVENT,
      handleCustomEvent as EventListener
    );

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener(
        this.STORAGE_UPDATE_EVENT,
        handleCustomEvent as EventListener
      );
    };
  }
}

export const storageManager = LocalStorageManager.getInstance();
