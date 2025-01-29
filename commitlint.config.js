const { list, scopes } = require('./changelog.config')

module.exports = {
    extends: ['@commitlint/config-angular'],
    rules: {
        'scope-case': [0],
        'scope-enum': [2, 'always', scopes],
        'type-enum': [2, 'always', list]
    },
}
