/** @type {import('prettier').Options} */
module.exports = {
  singleQuote: true,
  semi: false,
  trailingComma: 'all',
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'always',
  plugins: ['prettier-plugin-tailwindcss'],
}
