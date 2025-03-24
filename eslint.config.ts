import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import configPrettier from 'eslint-config-prettier'
import n from 'eslint-plugin-n'
import perfectionist from 'eslint-plugin-perfectionist'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import tseslint from 'typescript-eslint'

const MAX_DEPTH = 4
const MAX_FN_PARAMS = 3

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

export default tseslint.config([
  { ignores: ['node_modules'], languageOptions: { globals: { React: true } } },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  js.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  eslintPluginUnicorn.configs.recommended,
  {
    plugins: { n, perfectionist, 'simple-import-sort': simpleImportSort },
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-deprecated': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/prefer-as-const': 'error',

      'consistent-return': 'error',
      curly: 'error',

      'jsx-a11y/click-events-have-key-events': 'error',
      'jsx-a11y/lang': 'error',
      'jsx-a11y/no-noninteractive-element-interactions': 'error',
      'jsx-a11y/no-static-element-interactions': 'error',

      'max-depth': ['error', { max: MAX_DEPTH }],
      'max-params': ['error', { max: MAX_FN_PARAMS }],

      'n/no-process-env': 'error',

      'no-duplicate-imports': 'error',
      'no-eval': 'error',
      'no-lonely-if': 'error',
      'no-param-reassign': 'error',
      'no-promise-executor-return': 'error',
      'no-unneeded-ternary': 'error',
      'no-unreachable-loop': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',

      'perfectionist/sort-interfaces': 'warn',
      'perfectionist/sort-intersection-types': 'warn',
      'perfectionist/sort-jsx-props': 'warn',
      'perfectionist/sort-object-types': 'warn',
      'perfectionist/sort-objects': 'warn',
      'perfectionist/sort-switch-case': 'warn',
      'perfectionist/sort-union-types': 'warn',

      'prefer-const': 'error',
      'prefer-template': 'error',

      'react/button-has-type': 'error',
      'react/jsx-no-constructed-context-values': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/no-array-index-key': 'error',
      'react/no-unstable-nested-components': 'error',

      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',

      'unicorn/no-null': 'off',
      'unicorn/prevent-abbreviations': 'off',
    },
  },
  configPrettier,
])
