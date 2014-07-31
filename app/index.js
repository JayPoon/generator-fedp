'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');



var fedpGenerator = module.exports = function fedpGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(fedpGenerator, yeoman.generators.Base);

fedpGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    type    : 'input',
    name    : 'name',
    message : 'Your project name',
    default : this.appname
  }];

  this.prompt(prompts, function (props) {
    this.appname = props.name;    
    cb();
  }.bind(this));
};

fedpGenerator.prototype.app = function app() {
  var _base = this.src._base;
  var _dest = this.src._destBase;

  this.directory('demo', 'demo');
  this.mkdir('dist');
  this.mkdir('dist/css');
  this.mkdir('dist/js');
  this.mkdir('doc');
  this.directory('src', 'src');
  this.directory('test', 'test');
  console.log('Directories initialization done!');
  
};

fedpGenerator.prototype.projectfiles = function projectfiles() {
  var context = { 
    name: this.appname 
  };
  this.copy('_jshintrc', '.jshintrc');
  this.copy('_bower.json', 'bower.json');
  this.copy('_bowerrc', '.bowerrc');
  this.copy('_Gruntfile.js', 'Gruntfile.js');
  this.copy('README.md', 'README.md');
  this.template('_package.json', 'package.json', context);
};
