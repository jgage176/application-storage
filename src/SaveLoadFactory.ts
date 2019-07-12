import { SaveLoad } from './SaveLoadTypes';
import SaveLoadLocalStorage from './SaveLoadLocalStorage';
import SaveLoadSessionStorage from './SaveLoadSessionStorage';

export function saveLoadFactory(name: string, saveLocation: "local" | "session"): SaveLoad {
    switch (saveLocation) {
        case "local":
            return new SaveLoadLocalStorage(name);
        case "session":
            return new SaveLoadSessionStorage(name);
    }
}

export default saveLoadFactory;
