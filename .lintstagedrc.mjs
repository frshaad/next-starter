import path from 'node:path';

const buildEslintCommand = (filenames) =>
  `eslint --fix ${filenames
    .map((f) => `"${path.relative(process.cwd(), f)}"`)
    .join(' ')}`;

const commands = {
  '*.{ts,tsx,js,jsx,cjs,mjs,mts}': [buildEslintCommand, 'prettier --write'],
  '*.{json,jsonc,md}': ['prettier --write'],
};

export default commands;
