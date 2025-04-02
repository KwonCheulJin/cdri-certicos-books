type StorageValue = string | number | boolean | object | null;

interface StorageEventDetail {
  key: string;
  value: StorageValue;
}

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

  setItem(key: string, value: StorageValue) {
    localStorage.setItem(key, JSON.stringify(value));
    this.dispatchUpdateEvent(key, value);
  }

  getItem<T>(key: string): T | null {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  private dispatchUpdateEvent(key: string, value: StorageValue) {
    window.dispatchEvent(
      new CustomEvent<StorageEventDetail>(this.STORAGE_UPDATE_EVENT, {
        detail: { key, value },
      })
    );
  }

  subscribe(key: string, callback: (value: StorageValue) => void) {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key) {
        callback(e.newValue ? JSON.parse(e.newValue) : null);
      }
    };

    const handleCustomEvent = (e: CustomEvent<StorageEventDetail>) => {
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
