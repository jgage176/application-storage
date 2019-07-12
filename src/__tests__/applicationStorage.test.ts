import {SaveLoadLocalStorage, saveLoadFactory, SaveLocation} from '../';

describe('Save and load local storage directly with SaveLoadLocalStorage', () => {
    it('Can save a string', () => {
        const saveLoad = new SaveLoadLocalStorage("StringTest");
        saveLoad.setValue("string");
        expect(saveLoad.getValue()).toEqual("string");
    });
    it('Can save a number', () => {
        const saveLoad = new SaveLoadLocalStorage("NumberTest");
        saveLoad.setValue(1);
        expect(saveLoad.getValue()).toEqual(1);
    });
    it('Can save an object', () => {
        const saveLoad = new SaveLoadLocalStorage("ObjectTest");
        const expectedValue = {str: "string", num: 1};
        saveLoad.setValue(expectedValue);
        expect(saveLoad.getValue()).toEqual(expectedValue);
    });
    it('Can save an array', () => {
        const saveLoad = new SaveLoadLocalStorage("ArrayTest");
        const expectedValue = [1, 2, 3];
        saveLoad.setValue(expectedValue);
        expect(saveLoad.getValue()).toEqual(expectedValue);
    });
});

describe('Save and load local storage via factory', () => {
    it('Can save an object', () => {
        const saveLoad = saveLoadFactory("ObjectTest", SaveLocation.LocalStorage);
        const expectedValue = {str: "string", num: 1};
        saveLoad.setValue(expectedValue);
        expect(saveLoad.getValue()).toEqual(expectedValue);
    });
});

describe('Save and load session storage', () => {
    it('Can save a string', () => {
        const saveLoad = saveLoadFactory("SessionStorage", SaveLocation.SessionStorage);
        saveLoad.setValue("string");
        expect(saveLoad.getValue()).toEqual("string");
    });
    it('Can save a number', () => {
        const saveLoad = saveLoadFactory("SessionStorage", SaveLocation.SessionStorage);
        saveLoad.setValue(1);
        expect(saveLoad.getValue()).toEqual(1);
    });
    it('Can save an object', () => {
        const saveLoad = saveLoadFactory("SessionStorage", SaveLocation.SessionStorage);
        const expectedValue = {str: "string", num: 1};
        saveLoad.setValue(expectedValue);
        expect(saveLoad.getValue()).toEqual(expectedValue);
    });
    it('Can save an array', () => {
        const saveLoad = saveLoadFactory("SessionStorage", SaveLocation.SessionStorage);
        const expectedValue = [1, 2, 3];
        saveLoad.setValue(expectedValue);
        expect(saveLoad.getValue()).toEqual(expectedValue);
    });
});

describe('Remove objects', () => {
    it('Can remove from session storage', () => {
        const saveLoad = saveLoadFactory("SessionStorage", SaveLocation.SessionStorage);
        saveLoad.setValue("string");
        expect(saveLoad.getValue()).toEqual("string");
        saveLoad.removeValue();
        expect(saveLoad.getValue()).toEqual(undefined);
    });
    it('Can remove from local storage', () => {
        const saveLoad = saveLoadFactory("LocalStorage", SaveLocation.LocalStorage);
        saveLoad.setValue("string");
        expect(saveLoad.getValue()).toEqual("string");
        saveLoad.removeValue();
        expect(saveLoad.getValue()).toEqual(undefined);
    });
});