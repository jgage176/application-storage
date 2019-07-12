export interface Dictionary<T> {
    [key: string]: T;
}

export interface IAppStorage {
    getValue: () => any;
    getAllValues: () => Dictionary<string>;
    removeValue: () => void;
    setValue: (value: any) => void;
}