import { SaveLoad } from './SaveLoadTypes';
import * as SaveLoadStorage from './SaveLoadStorage';

export default class SaveLoadSessionStorage implements SaveLoad {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    getValue = (): any => {
        return SaveLoadStorage.loadFromSessionStorage(this.name);
    }

    getAllValues = () => {
        return SaveLoadStorage.loadAllFromSessionStorage();
    }

    removeValue = () => {
        SaveLoadStorage.removeFromSessionStorage(this.name);
    };

    setValue = (value: any) => {
        SaveLoadStorage.saveToSessionStorage(this.name, value);
    };
}
