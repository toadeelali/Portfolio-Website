/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */

const config = {
  printWidth: 120,
  tabWidth: 2,
  singleQuote: true,
  semi: true,
  trailingComma: 'es5',
  arrowParens: 'always',
  endOfLine: 'auto',
  bracketSpacing: true,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['twMerge', 'twJoin', 'twSort'],
  tailwindAttributes: [
    'iconClassName',
    'inputClassName',
    'bodyClassName',
    'containerClassName',
    'labelClassName',
    'formItemClassName',
  ],
  overrides: [
    {
      files: '*.{js,jsx,tsx,ts,scss,json,html}',
      options: {
        tabWidth: 2,
      },
    },
  ],
};

export default config;
