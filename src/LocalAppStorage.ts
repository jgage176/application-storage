import { IAppStorage } from './AppStorageTypes';
import * as AppStorage from './AppStorage';

export default class LocalAppStorage implements IAppStorage {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    getValue = (): any => {
        return AppStorage.loadFromLocalStorage(this.name);
    }

    getAllValues = () => {
        return AppStorage.loadAllFromLocalStorage();
    }

    removeValue = () => {
        AppStorage.removeFromLocalStorage(this.name);
    };

    setValue = (value: any) => {
        AppStorage.saveToLocalStorage(this.name, value);
    };
}
