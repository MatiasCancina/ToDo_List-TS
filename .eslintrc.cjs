module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended'
    // "plugin:prettier/recommended", // Esto desactiva las reglas de ESLint que entran en conflicto con Prettier
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react'],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'react/react-in-jsx-scope': 'off',
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'react/prop-types': 'off',
    'multiline-ternary': 'off'
  }
}
