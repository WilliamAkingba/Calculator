module.exports = [
    {
        files: ['**/*.js'], 
        languageOptions: {
            ecmaVersion: 2021, 
            sourceType: 'module', 
            globals: {
                module: 'readonly',
                require: 'readonly',
                describe: 'readonly',
                console: 'readonly',
                test: 'readonly',
                __dirname: 'readonly',
                process: 'readonly',
                expect: 'readonly',
                beforeEach: 'readonly',
            },
        },
        plugins: {
            security: require('eslint-plugin-security'),
        },
        rules: {
            'no-unused-vars': 'warn',
            'no-undef': 'error',
            'security/detect-object-injection': 'warn',
            'security/detect-unsafe-regex': 'error',
            'security/detect-buffer-noassert': 'warn',
            'security/detect-child-process': 'error',
            'security/detect-eval-with-expression': 'error',
        },
    },
];
