'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    this.log(yosay(`Welcome to ${chalk.red('exotherm')} generator!`));

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
        default: 'author'
      },
      {
        type: 'input',
        name: 'homepage',
        message: 'Homepage:',
        default: `https://${this.appname}.com`
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
      this.props.destination = this.appname === this.props.name ? '.' : this.props.name;
    });
  }

  writing() {
    console.log(this.props.destination);
    const files = [
      'src',
      'ionic.config.json',
      'package.json',
      'tsconfig.json',
      'tslint.json'
    ];
    for (let file of files) {
      this.fs.copyTpl(
        this.templatePath(`core/${file}`),
        this.destinationPath(`${this.props.destination}/${file}`),
        this.props
      );
    }

    this.fs.copy(
      this.templatePath('core/_.gitignore'),
      this.destinationPath(`${this.props.destination}/.gitignore`)
    );

    this.fs.copy(
      this.templatePath('core/.editorconfig'),
      this.destinationPath(`${this.props.destination}/.editorconfig`)
    );
  }

  install() {
    this.npmInstall().then(() => {
      this.log('\n\nSuccessfully Done!!');
      this.log('Run ' + chalk.green('ionic serve') + ' to start.\n');
    });
  }
};
