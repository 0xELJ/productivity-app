import { StorageKeys } from '../constants/StorageKeys';

export class LocalStorage {
    storage = window.localStorage;

    setItem(key: StorageKeys, value: any): void {
        try {
            const serializedData = JSON.stringify(value);
            this.storage.setItem(key, serializedData);
        } catch(error) {
            alert('Ocurrió un error al guardar los datos\n' + error.message);
        }
    }

    getItem(key: StorageKeys): any {
        try {
            const serializedData = this.storage.getItem(key);
            if (serializedData === null) {
                return undefined;
            }
            return JSON.parse(serializedData);
        } catch (error) {
            alert('Ocurrió un error al obtener los datos\n' + error.message);
            return undefined;
        }
    }

    removeItem(key: StorageKeys): void {
        try {
            this.storage.removeItem(key);
        } catch (error) {
            alert('No fue posible remover el dato\n' + error.message);
        }
    }
}
