import { Dictionary } from './SaveLoadTypes';

export function loadFromLocalStorage(valueName: string) {
    try {
        const serializedValue = localStorage.getItem(`${valueName}`);
        if (serializedValue === null || serializedValue === undefined || serializedValue === 'undefined') {
            return undefined;
        }

        return JSON.parse(serializedValue);
    } catch (err) {
        console.error(err);
        return undefined;
    }
}

export function loadAllFromLocalStorage() {
    const allKeys: Dictionary<string> = {};
    for (let counter = 0; counter < localStorage.length; counter++) {
        const key = localStorage.key(counter);
        if (key) {
            allKeys[key] = loadFromLocalStorage(key);
        }
    }
    return allKeys;
};

export function loadFromSessionStorage(valueName: string) {
    try {
        const serializedValue = sessionStorage.getItem(`${valueName}`);
        if (serializedValue === null || serializedValue === undefined || serializedValue === 'undefined') {
            return undefined;
        }

        return JSON.parse(serializedValue);
    } catch (err) {
        console.error(err);
        return undefined;
    }
}

export function loadAllFromSessionStorage() {
    const allKeys: Dictionary<string> = {};
    for (let counter = 0; counter < sessionStorage.length; counter++) {
        const key = sessionStorage.key(counter);
        if (key) {
            allKeys[key] = loadFromSessionStorage(key);
        }
    }
    return allKeys;
};

export function removeFromLocalStorage(valueName: string) {
    try {
        localStorage.removeItem(`${valueName}`);
    } catch (err) {
        console.error(err);
    }
}

export function removeFromSessionStorage(valueName: string) {
    try {
        sessionStorage.removeItem(`${valueName}`);
    } catch (err) {
        console.error(err);
    }
}

export function saveToLocalStorage(valueName: string, value: any) {
    try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(`${valueName}`, serializedState);
    } catch (err) {
        console.error(err);
    }
}

export function saveToSessionStorage(valueName: string, value: any) {
    try {
        const serializedState = JSON.stringify(value);
        sessionStorage.setItem(`${valueName}`, serializedState);
    } catch (err) {
        console.error(err);
    }
}
