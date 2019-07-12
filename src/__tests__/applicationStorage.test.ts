import { LocalAppStorage, appStorageFactory } from '../';

describe('Save and load local storage directly with LocalAppStorage', () => {
    it('Can save a string', () => {
        const saveLoad = new LocalAppStorage("StringTest");
        saveLoad.setValue("string");
        expect(saveLoad.getValue()).toEqual("string");
    });
    it('Can save a number', () => {
        const saveLoad = new LocalAppStorage("NumberTest");
        saveLoad.setValue(1);
        expect(saveLoad.getValue()).toEqual(1);
    });
    it('Can save an object', () => {
        const saveLoad = new LocalAppStorage("ObjectTest");
        const expectedValue = { str: "string", num: 1 };
        saveLoad.setValue(expectedValue);
        expect(saveLoad.getValue()).toEqual(expectedValue);
    });
    it('Can save an array', () => {
        const saveLoad = new LocalAppStorage("ArrayTest");
        const expectedValue = [1, 2, 3];
        saveLoad.setValue(expectedValue);
        expect(saveLoad.getValue()).toEqual(expectedValue);
    });
});

describe('Save and load local storage via factory', () => {
    it('Can save an object', () => {
        const saveLoad = appStorageFactory("ObjectTest", "local");
        const expectedValue = { str: "string", num: 1 };
        saveLoad.setValue(expectedValue);
        expect(saveLoad.getValue()).toEqual(expectedValue);
    });
});

describe('Save and load session storage', () => {
    it('Can save a string', () => {
        const saveLoad = appStorageFactory("SessionStorage", "session");
        saveLoad.setValue("string");
        expect(saveLoad.getValue()).toEqual("string");
    });
    it('Can save a number', () => {
        const saveLoad = appStorageFactory("SessionStorage", "session");
        saveLoad.setValue(1);
        expect(saveLoad.getValue()).toEqual(1);
    });
    it('Can save an object', () => {
        const saveLoad = appStorageFactory("SessionStorage", "session");
        const expectedValue = { str: "string", num: 1 };
        saveLoad.setValue(expectedValue);
        expect(saveLoad.getValue()).toEqual(expectedValue);
    });
    it('Can save an array', () => {
        const saveLoad = appStorageFactory("SessionStorage", "session");
        const expectedValue = [1, 2, 3];
        saveLoad.setValue(expectedValue);
        expect(saveLoad.getValue()).toEqual(expectedValue);
    });
});

describe('Remove objects', () => {
    it('Can remove from local storage', () => {
        const saveLoad = appStorageFactory("LocalStorage", "local");
        saveLoad.setValue("string");
        expect(saveLoad.getValue()).toEqual("string");
        saveLoad.removeValue();
        expect(saveLoad.getValue()).toEqual(undefined);
    });
    it('Can remove from session storage', () => {
        const saveLoad = appStorageFactory("SessionStorage", "session");
        saveLoad.setValue("string");
        expect(saveLoad.getValue()).toEqual("string");
        saveLoad.removeValue();
        expect(saveLoad.getValue()).toEqual(undefined);
    });
});