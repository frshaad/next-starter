import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import configPrettier from 'eslint-config-prettier'
import n from 'eslint-plugin-n'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

const MAX_DEPTH = 4
const MAX_FN_PARAMS = 3

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

export default defineConfig([
  { ignores: ['node_modules'], languageOptions: { globals: { React: true } } },

  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // JavaScript
  js.configs.recommended,
  {
    rules: {
      'consistent-return': 'error',
      curly: 'error',
      'max-depth': ['error', { max: MAX_DEPTH }],
      'max-params': ['error', { max: MAX_FN_PARAMS }],
      'no-duplicate-imports': 'error',
      'no-eval': 'error',
      'no-lonely-if': 'error',
      'no-param-reassign': 'error',
      'no-promise-executor-return': 'error',
      'no-unneeded-ternary': 'error',
      'no-unreachable-loop': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-const': 'error',
      'prefer-template': 'error',
    },
  },

  // TypeScript
  {
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/prefer-as-const': 'error',
    },
  },

  // React
  {
    rules: {
      'react/button-has-type': 'error',
      'react/jsx-no-constructed-context-values': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/no-array-index-key': 'error',
      'react/no-unstable-nested-components': 'error',
    },
  },

  // JSX A11y
  {
    rules: {
      'jsx-a11y/click-events-have-key-events': 'error',
      'jsx-a11y/lang': 'error',
      'jsx-a11y/no-noninteractive-element-interactions': 'error',
      'jsx-a11y/no-static-element-interactions': 'error',
    },
  },

  {
    plugins: { n },
    rules: {
      'n/no-process-env': 'error',
    },
  },

  {
    plugins: { 'simple-import-sort': simpleImportSort },
    rules: {
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
    },
  },

  configPrettier,
])
