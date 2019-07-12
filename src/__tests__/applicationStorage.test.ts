import appStorageFactory, { LocalAppStorage } from '../';

describe('Save and load local storage directly with LocalAppStorage', () => {
    it('Can save a string', () => {
        const appStorage = new LocalAppStorage("StringTest");
        appStorage.setValue("string");
        expect(appStorage.getValue()).toEqual("string");
    });
    it('Can save a number', () => {
        const appStorage = new LocalAppStorage("NumberTest");
        appStorage.setValue(1);
        expect(appStorage.getValue()).toEqual(1);
    });
    it('Can save an object', () => {
        const appStorage = new LocalAppStorage("ObjectTest");
        const expectedValue = { str: "string", num: 1 };
        appStorage.setValue(expectedValue);
        expect(appStorage.getValue()).toEqual(expectedValue);
    });
    it('Can save an array', () => {
        const appStorage = new LocalAppStorage("ArrayTest");
        const expectedValue = [1, 2, 3];
        appStorage.setValue(expectedValue);
        expect(appStorage.getValue()).toEqual(expectedValue);
    });
});

describe('Save and load local storage via factory', () => {
    it('Can save an object', () => {
        const appStorage = appStorageFactory("ObjectTest", "local");
        const expectedValue = { str: "string", num: 1 };
        appStorage.setValue(expectedValue);
        expect(appStorage.getValue()).toEqual(expectedValue);
    });
});

describe('Save and load session storage', () => {
    it('Can save a string', () => {
        const appStorage = appStorageFactory("SessionStorage", "session");
        appStorage.setValue("string");
        expect(appStorage.getValue()).toEqual("string");
    });
    it('Can save a number', () => {
        const appStorage = appStorageFactory("SessionStorage", "session");
        appStorage.setValue(1);
        expect(appStorage.getValue()).toEqual(1);
    });
    it('Can save an object', () => {
        const appStorage = appStorageFactory("SessionStorage", "session");
        const expectedValue = { str: "string", num: 1 };
        appStorage.setValue(expectedValue);
        expect(appStorage.getValue()).toEqual(expectedValue);
    });
    it('Can save an array', () => {
        const appStorage = appStorageFactory("SessionStorage", "session");
        const expectedValue = [1, 2, 3];
        appStorage.setValue(expectedValue);
        expect(appStorage.getValue()).toEqual(expectedValue);
    });
});

describe('Remove objects', () => {
    it('Can remove from local storage', () => {
        const appStorage = appStorageFactory("LocalStorage", "local");
        appStorage.setValue("string");
        expect(appStorage.getValue()).toEqual("string");
        appStorage.removeValue();
        expect(appStorage.getValue()).toEqual(undefined);
    });
    it('Can remove from session storage', () => {
        const appStorage = appStorageFactory("SessionStorage", "session");
        appStorage.setValue("string");
        expect(appStorage.getValue()).toEqual("string");
        appStorage.removeValue();
        expect(appStorage.getValue()).toEqual(undefined);
    });
});