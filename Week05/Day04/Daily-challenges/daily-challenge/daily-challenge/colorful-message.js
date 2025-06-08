const chalk = require('chalk');

function displayColorfulMessage() {
  console.log(chalk.blue('Hello from Chalk!') + ' ' + chalk.green('This message is colorful!'));
}

module.exports = displayColorfulMessage;
