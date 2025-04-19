const { Command } = require('commander');
const program = new Command();

program
  .name('string-util')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

program.command('wordz')
  .description('Split a string into substrings and display as an array')
  .argument('<number>', 'No of words')
  .option('--first', 'display just the first substring')
  .option('-w, --word <char>', 'separator character', ' ')
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  });

program.parse();