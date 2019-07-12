export * from './AppStorageFactory';
export { default as LocalAppStorage } from './LocalAppStorage';
export { default as SessionAppStorage } from './SessionAppStorage';
export * from './AppStorage';
export * from './AppStorageTypes';

import appStorageFactory from './AppStorageFactory';
export default appStorageFactory;
