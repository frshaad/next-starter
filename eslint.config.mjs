import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import configPrettier from 'eslint-config-prettier'
import pluginUnicorn from 'eslint-plugin-unicorn'
import tseslint from 'typescript-eslint'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

export default tseslint.config(
  {
    ignores: ['node_modules', '.next'],
    languageOptions: { globals: { React: true } },
  },

  js.configs.recommended,

  ...compat.extends('next/core-web-vitals'),

  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [
      ...tseslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    rules: {
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { attributes: false } },
      ],
    },
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },

  pluginUnicorn.configs.recommended,

  {
    rules: {
      // JS
      'no-unused-vars': 'off',
      // React
      'react/button-has-type': 'warn',
      'react/jsx-boolean-value': ['warn', 'never'],
      'react/jsx-curly-brace-presence': [
        'warn',
        { props: 'never', children: 'never' },
      ],
      'react/self-closing-comp': 'warn',
      'react/hook-use-state': ['warn', { allowDestructuredState: true }],
      'react/jsx-fragments': 'error',
      'react/jsx-no-leaked-render': 'error',
      'react/jsx-no-useless-fragment': 'warn',
      'react/jsx-sort-props': [
        'warn',
        {
          ignoreCase: true,
          callbacksLast: true,
          shorthandLast: true,
          multiline: 'last',
        },
      ],
      'react/no-invalid-html-attribute': 'warn',

      // Unicorn
      'unicorn/prevent-abbreviations': 'off',
    },
  },

  configPrettier,
)
