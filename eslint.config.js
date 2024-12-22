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
                console: 'readonly',
                test: 'readonly',
                expect: 'readonly',
                beforeEach: 'readonly',
            },
        },
        plugins: {
            // Include security plugin
            security: require('eslint-plugin-security'),
        },
        rules: {
            // Existing rules
            'no-unused-vars': 'warn', // Warn on unused variables
            'no-undef': 'error', // Error on undefined variables
            
            // Security-specific rules
            'security/detect-object-injection': 'warn', // Warn on unsafe object injection
            'security/detect-unsafe-regex': 'error', // Error on unsafe regular expressions
            'security/detect-buffer-noassert': 'warn', // Warn on insecure Buffer methods
            'security/detect-child-process': 'error', // Error on use of child_process
            'security/detect-eval-with-expression': 'error', // Error on use of eval()
        },
    },
];
