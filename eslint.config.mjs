import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    plugins: {},
    rules: {
      'prefer-arrow-callback': ['error'],
      'prefer-template': ['error'],
    },
  },
];

export default eslintConfig;
