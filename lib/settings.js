const yargs = require('yargs');

const argv = yargs
  .parserConfiguration({ 'duplicate-arguments-array': false })
  .option('script', {
    alias: 's',
    type: 'string',
    description: 'Your npm Cypress command'
  })
  .option('threads', {
    alias: 't',
    type: 'number',
    description: 'Number of threads',
    default: 2
  })
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Execute with verbose logging',
    default: false
  })
  .option('bail', {
    alias: 'b',
    type: 'boolean',
    description: 'Exit on first suite finishing with errors',
    default: false
  })
  .option('spec', {
    alias: ['specs', 'specsDir', 'd'], // support both --spec and --specs for compatibility with cypress run and --specsDir and --d for compatibility with older versions of cypress-parallel
    type: 'string',
    description:
      'Test suite file paths (globs allowed). Can be one or more, comma separated, e.g.: "cypress/integration/**/*.spec.js,cypress/e2e/**/*.cy.js"',
    default: ['cypress/integration/**/*']
  })
  .option('args', {
    alias: 'a',
    type: 'string',
    description: 'Your npm Cypress command arguments'
  })
  .option('reporter', {
    alias: 'r',
    type: 'string',
    description: 'Reporter to pass to Cypress'
  })
  .option('reporterModulePath', {
    alias: 'n',
    type: 'string',
    description: 'Reporter module path',
    default: 'cypress-multi-reporters'
  })
  .option('reporterOptions', {
    alias: 'o',
    type: 'string',
    description: 'Reporter options'
  })
  .option('reporterOptionsPath', {
    alias: 'p',
    type: 'string',
    description: 'Reporter options path'
  })
  .option('strictMode', {
    alias: 'm',
    type: 'boolean',
    default: true,
    description: 'Strict mode checks'
  })
  .option('weightsJson', {
    alias: 'w',
    type: 'string',
    description: 'Parallel weights json file',
    default: 'cypress/parallel-weights.json'
  }).argv;

if (!argv.script) {
  throw new Error('Expected command, e.g.: cypress-parallel <cypress-script>');
}

const COLORS = [
  '\x1b[32m',
  '\x1b[36m',
  '\x1b[29m',
  '\x1b[33m',
  '\x1b[37m',
  '\x1b[38m',
  '\x1b[39m',
  '\x1b[40m'
];

/**
 * @type {{
 * threadCount: number,
 * testSuitesPaths: string,
 * shouldBail: boolean,
 * isVerbose: boolean,
 * weightsJSON: string,
 * defaultWeight: number,
 * reporter: string,
 * reporterModulePath: string,
 * reporterOptions: string,
 * reporterOptionsPath: string,
 * script: string,
 * strictMode: boolean,
 * scriptArguments: string[]
 * }}
 */

const settings = {
  threadCount: argv.threads,
  testSuitesPaths: argv.spec,
  shouldBail: argv.bail,
  isVerbose: argv.verbose,
  weightsJSON: argv.weightsJson,
  defaultWeight: 1,
  reporter: argv.reporter,
  reporterModulePath: argv.reporterModulePath,
  reporterOptions: argv.reporterOptions,
  reporterOptionsPath: argv.reporterOptionsPath,
  script: argv.script,
  strictMode: argv.strictMode,
  scriptArguments: argv.args ? argv.args.split(' ') : []
};

process.env.CY_PARALLEL_SETTINGS = JSON.stringify(settings);

module.exports = {
  settings,
  COLORS
};
