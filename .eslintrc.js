module.exports = {
  env: {browser: true},
  extends: ['@evanpurkhiser'],

  settings: {
    // Using preact, be explicit about the version
    react: {version: '16.0'},
  },

  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Packages. `react` related packages come first.
          ['^react', '^@?\\w'],
          // Node.js builtins.
          [`^(${require('module').builtinModules.join('|')})(/|$)`],
          // Internal packages.
          ['^(src|app|main|overlay|web)(/.*|$)'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ],
      },
    ],
  },
};
