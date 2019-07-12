import { SaveLoad } from './SaveLoadTypes';
import * as SaveLoadStorage from './SaveLoadStorage';

export default class SaveLoadLocalStorage implements SaveLoad {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    getValue = (): any => {
        return SaveLoadStorage.loadFromLocalStorage(this.name);
    }

    getAllValues = () => {
        return SaveLoadStorage.loadAllFromLocalStorage();
    }

    removeValue = () => {
        SaveLoadStorage.removeFromLocalStorage(this.name);
    };

    setValue = (value: any) => {
        SaveLoadStorage.saveToLocalStorage(this.name, value);
    };
}
