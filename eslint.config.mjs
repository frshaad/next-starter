import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import configPrettier from 'eslint-config-prettier';
import n from 'eslint-plugin-n';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

const MAX_DEPTH = 4;
const MAX_FN_PARAMS = 3;

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default tseslint.config([
  { languageOptions: { globals: { React: true } }, ignores: ['node_modules'] },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  js.configs.recommended,
  eslintPluginUnicorn.configs.recommended,
  {
    plugins: { n },
    rules: {
      'max-depth': ['error', { max: MAX_DEPTH }],
      'max-params': ['error', { max: MAX_FN_PARAMS }],
      'prefer-const': 'error',
      'no-eval': 'error',
      'no-param-reassign': 'error',
      'no-promise-executor-return': 'error',
      'no-unreachable-loop': 'error',
      curly: 'error',
      'consistent-return': 'error',
      'no-lonely-if': 'error',
      'no-var': 'error',
      'prefer-template': 'error',
      'object-shorthand': 'error',
      'no-duplicate-imports': 'error',
      'no-unneeded-ternary': 'error',

      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/prefer-as-const': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': 'off',

      'react/button-has-type': 'error',
      'react/jsx-no-constructed-context-values': 'error',
      'react/no-array-index-key': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/no-unstable-nested-components': 'error',

      'jsx-a11y/lang': 'error',
      'jsx-a11y/no-static-element-interactions': 'error',
      'jsx-a11y/click-events-have-key-events': 'error',
      'jsx-a11y/no-noninteractive-element-interactions': 'error',

      'n/no-process-env': 'error',

      'unicorn/prevent-abbreviations': 'off',
    },
  },
  configPrettier,
]);
