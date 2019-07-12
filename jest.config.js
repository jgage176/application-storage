module.exports = {
    "collectCoverageFrom": [
        "src/**/*.{js,jsx,ts,tsx}",
        "!**/*.d.ts"
    ],
    "moduleNameMapper": {
        "src/(.*)": "<rootDir>/src/$1"
    },
    "roots": [
        "<rootDir>/src"
    ],
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "setupFiles": [
        "<rootDir>/config/jest/testSetup.js"
    ],
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
}