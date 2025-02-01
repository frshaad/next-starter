import path from 'node:path';

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

const commands = {
  '*.{ts,tsx,js,jsx,json}': [buildEslintCommand, 'prettier --write'],
};

export default commands;
