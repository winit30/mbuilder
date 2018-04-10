const {generateDir} = require('./generateDir');
const {writeFile} = require('./writeFile');

const generateFile = (filepath, api) => {

    writeFile(filepath, api);

}

module.exports = {generateFile}
