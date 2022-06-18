// const conventionalCommit = require("./conventionalCommit.json");

// const typesEnum = Object.keys(conventionalCommit.types);
// const scopesEnum = Object.keys(conventionalCommit.scopes);

const types = [
  'build',
  'chore',
  'docs',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  'style',
  'test',
];

const scopes = ['app', 'library', 'backend', 'authentication', 'settings'];

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', types],
    'scope-case': [2, 'always', ['camel-case']],
    'scope-enum': [2, 'always', scopes],
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'always', ['lower-case']],
    'header-max-length': [2, 'always', 72],
  },
};
