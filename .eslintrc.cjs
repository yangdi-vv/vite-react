module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        'plugin:react/recommended',
        'standard-with-typescript',
        "plugin:@typescript-eslint/recommended",
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            modules: true
        },
        requireConfigFile: false,
        project: './tsconfig.json'
    },
    plugins: [
        'react',
        '@typescript-eslint'
    ],
    rules: {

    }
}
