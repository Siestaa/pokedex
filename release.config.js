const readFile = require('fs').readFileSync
const { resolve } = require('path')

const commitPartial = readFile(
  resolve(__dirname, './semver/partials/commitPartial.hbs'),
  'utf-8',
)

const headerPartial = readFile(
  resolve(__dirname, './semver/partials/headerPartial.hbs'),
  'utf-8',
)

const footerPartial = readFile(
  resolve(__dirname, './semver/partials/footerPartial.hbs'),
  'utf-8',
)

const {
  BREAKING_CHANGE,
  REPO_URL,
  SCOPES,
  TYPES,
} = require('./semver/constants')

function skipNote({ notes, type}) {
  if (['fix', 'feat', 'perf', 'style', 'chore', 'docs', 'test', 'ci'].includes(type)) {
    return false
  }
  if (type && notes.length) {
    return false
  }
  return true
}

module.exports = {
  branches: [{ name: 'feature/NEXT/v_[0-9]+.[0-9]+.[0-9]+' }],
  ci: false,
  dryRun: false,
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        parserOpts: {
          noteKeywords: [BREAKING_CHANGE],
        },
        releaseRules: [
          { body: `*${BREAKING_CHANGE}*`, release: 'minor' },
          { release: 'patch', type: 'fix' },
          { release: false, type: 'ref' },
          { release: 'patch', type: 'perf' },
          { release: false, type: 'style' },
          { release: 'minor', type: 'chore' },
          { release: 'patch', type: 'docs' },
          { release: 'patch', type: 'test' },
          { release: 'patch', type: 'ci' },
        ],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        host: REPO_URL,
        parserOpts: {
          noteKeywords: [BREAKING_CHANGE],
        },
        writerOpts: {
          commitPartial,
          footerPartial,
          groupBy: 'scope',
          headerPartial,
          transform: (commit) => {
            if (skipNote(commit)) {
              return undefined
            }

            const obj = { ...commit }
            obj.custom = {}

            obj.custom.authorName = commit.committer.name

            obj.custom.type = TYPES[commit.type].name
            obj.scope = SCOPES[commit.scope]

            if (commit.committer.email) {
              obj.custom.authorEmail = commit.committer.email
            }

            return obj
          },
        },
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json', 'package-lock.json'],
        message: 'ci(proj): release v${nextRelease.version}',
      },
    ],
  ],
  tagFormat: 'v${version}',
}
