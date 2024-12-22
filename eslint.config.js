// eslint.config.js
module.exports = [
    {
        files: ['**/*.js'], // Apply to all .js files
        languageOptions: {
            ecmaVersion: 2021, // Use ECMAScript 2021
            sourceType: 'module', // Allow ES modules
            globals: {
                // Node.js globals
                module: 'readonly',
                require: 'readonly',
                // Jest globals
                describe: 'readonly',
                test: 'readonly',
                expect: 'readonly',
                beforeEach: 'readonly',
            },
        },
        rules: {
            'no-unused-vars': 'warn', // Warn on unused variables
            'no-undef': 'error', // Error on undefined variables
        },
    },
];
