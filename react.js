module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: './',
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'react', 'jsx-a11y', 'import'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 90,
        arrowParens: 'always',
        useTabs: false,
        endOfLine: 'auto',
        trailingComma: 'all',
        proseWrap: 'preserve',
        semi: true,
        tabWidth: 2,
      },
    ],
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'react/jsx-no-bind': [
      'warn',
      {
        allowArrowFunctions: true,
      },
    ],
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-newline': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-no-literals': 'off',
    'react/jsx-no-leaked-render': ['off'],
    'react/jsx-max-depth': ['warn', { max: 4 }],
    'react/forbid-component-props': ['error', { forbid: ['className'] }],
    'react/jsx-props-no-spreading': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': 'typescript',
    'jsx-a11y': {
      components: {
        Image: 'img',
        TextInput: 'input',
        PasswordInput: 'input',
      },
    },
    react: {
      version: 'detect',
    },
  },
};
