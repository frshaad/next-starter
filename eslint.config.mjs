// @ts-check
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import configPrettier from 'eslint-config-prettier';
import n from 'eslint-plugin-n';
import tailwind from 'eslint-plugin-tailwindcss';
import unicorn from 'eslint-plugin-unicorn';
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
  unicorn.configs.recommended,
  ...tailwind.configs['flat/recommended'],
  {
    plugins: { n },
    rules: {
      'prefer-const': 'error',
      'max-depth': ['warn', { max: MAX_DEPTH }],
      'max-params': ['error', { max: MAX_FN_PARAMS }],
      'no-var': 'error',
      'no-use-before-define': 'error',
      'no-eval': 'error',
      'no-param-reassign': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/prefer-as-const': 'error',
      'react/button-has-type': 'error',
      'react/jsx-no-constructed-context-values': 'error',
      'react/no-array-index-key': 'error',
      'react/self-closing-comp': 'error',
      'jsx-a11y/lang': 'error',
      'jsx-a11y/no-static-element-interactions': 'error',
      'n/no-process-env': 'error',
      'unicorn/prevent-abbreviations': [
        'error',
        {
          allowList: {
            util: true,
            utils: true,
            prop: true,
            props: true,
            param: true,
            params: true,
            env: true,
            db: true,
          },
        },
      ],
      'no-promise-executor-return': 'error',
      'no-unreachable-loop': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react/jsx-no-useless-fragment': 'error',
      'react/hook-use-state': 'error',
      'react/no-unstable-nested-components': 'error',
      'jsx-a11y/click-events-have-key-events': 'error',
      'jsx-a11y/no-noninteractive-element-interactions': 'error',
    },
  },
  configPrettier,
]);
