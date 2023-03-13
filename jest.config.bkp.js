module.exports = {
    preset: 'ts-jest',
    testEnvironment: "node",
    testMatch: ["**/tests/*.test.tsx"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    }
};