'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the bedazzling ${chalk.red('generator-exotherm')} generator!`)
    );

    this.appname = this.appname.replace(/\s+/g, '-');

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What is your app name?',
        default: this.appname
      },
      {
        type: 'input',
        name: 'description',
        message: 'App description:',
        default: 'Awesome description'
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author:',
        default: this.appname
      },
      {
        type: 'input',
        name: 'homepage',
        message: 'Homepage:',
        default: `https://${this.appname}.com`
      },
      {
        type: 'confirm',
        name: 'authentication',
        message: 'Would you like to enable authentication?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('core/.gitignore'),
      this.destinationPath(`${this.props.name}/.gitignore`)
    );

    this.fs.copy(
      this.templatePath('core/.editorconfig'),
      this.destinationPath(`${this.props.name}/.editorconfig`)
    );

    this.fs.copyTpl(
      this.templatePath('core'),
      this.destinationPath(`${this.props.name}/.`),
      this.props
    );
  }

  install() {
    process.chdir(this.props.name);
    this.npmInstall().then(() => {
      this.log('\n\nSuccessfully Done!!');
      this.log('Run ' + chalk.green('ionic serve') + ' to start.\n');
    });
  }
};
