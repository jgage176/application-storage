import { IAppStorage } from './AppStorageTypes';
import * as AppStorage from './AppStorage';

export default class SessionAppStorage implements IAppStorage {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    getValue = (): any => {
        return AppStorage.loadFromSessionStorage(this.name);
    }

    getAllValues = () => {
        return AppStorage.loadAllFromSessionStorage();
    }

    removeValue = () => {
        AppStorage.removeFromSessionStorage(this.name);
    };

    setValue = (value: any) => {
        AppStorage.saveToSessionStorage(this.name, value);
    };
}
