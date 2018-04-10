const fs = require("fs");
const {generateFile} = require('./../utils/generateFile');
const {apiTemplate} = require('./../templates/api/apiTemplate');

const apiModel = (schemaName, returnValue, schema) => {
    
    const api = apiTemplate(schemaName, returnValue, schema);

    const filePath = `./public/modules/models/${schemaName}.js`;

    generateFile(filePath, api.trim());
}

module.exports = {apiModel};
