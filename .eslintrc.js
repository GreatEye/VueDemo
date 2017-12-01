// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
  },
  env: {
    browser: true,
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
    'comma-dangle': 1,
    'eqeqeq': 1,
    'quotes': 1,
    'semi': 1,
    'brace-style': 1,
    'camelcase': 1,
    'no-unused-vars': 1,
    'curly': ['warn', 'all'],
    'space-before-function-paren': 0,
    'spaced-comment': 0,
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
}