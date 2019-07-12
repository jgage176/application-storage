import { SaveLoad } from './SaveLoadTypes';
import SaveLoadLocalStorage from './SaveLoadLocalStorage';
import SaveLoadSessionStorage from './SaveLoadSessionStorage';

export enum SaveLocation {
    LocalStorage,
    SessionStorage,
}

export function saveLoadFactory(name: string, saveLocation: SaveLocation): SaveLoad {
    switch (saveLocation) {
        case SaveLocation.LocalStorage:
            return new SaveLoadLocalStorage(name);
        case SaveLocation.SessionStorage:
            return new SaveLoadSessionStorage(name);
    }
}

export default saveLoadFactory;
