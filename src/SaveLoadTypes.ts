export interface Dictionary<T> {
    [key: string]: T;
}

export interface SaveLoad{
    getValue: () => any;
    getAllValues: () => Dictionary<string>;
    removeValue: () => void;
    setValue: (value: any) => void;
}