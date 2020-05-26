import { StorageKeys } from '../constants/StorageKeys';

const storage = window.localStorage;

export function setItem(key: StorageKeys, value: any): void {
    try {
        const serializedData = JSON.stringify(value);
        storage.setItem(key, serializedData);
    } catch(error) {
        alert('Ocurrió un error al guardar los datos\n' + error.message);
    }
}

export function getItem(key: StorageKeys): any {
    try {
        const serializedData = storage.getItem(key);
        if (serializedData === null) {
            return undefined;
        }
        return JSON.parse(serializedData);
    } catch (error) {
        alert('Ocurrió un error al obtener los datos\n' + error.message);
        return undefined;
    }
}

export function removeItem(key: StorageKeys): void {
    try {
        storage.removeItem(key);
    } catch (error) {
        alert('No fue posible remover el dato\n' + error.message);
    }
}
