const fs = require("fs"),
      fse = require('fs-extra');

var generateDir = () => {

  //delete base folder
  fse.removeSync('./modules');
  fse.removeSync('./public/modules');
  //create folders
  fs.mkdirSync('./public/modules');
  fs.mkdirSync('./public/modules/db');
  fs.mkdirSync('./public/modules/middleware');
  fs.mkdirSync('./public/modules/models');
  fs.mkdirSync('./public/modules/routes');
  fs.mkdirSync('./public/modules/server');
  fs.mkdirSync('./public/modules/utils');

};

module.exports = {generateDir};
