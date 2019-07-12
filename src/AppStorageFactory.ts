import { IAppStorage } from './AppStorageTypes';
import AppStorage from './LocalAppStorage';
import SessionAppStorage from './SessionAppStorage';

export function appStorageFactory(name: string, saveLocation: "local" | "session"): IAppStorage {
    switch (saveLocation) {
        case "local":
            return new AppStorage(name);
        case "session":
            return new SessionAppStorage(name);
    }
}

export default appStorageFactory;
