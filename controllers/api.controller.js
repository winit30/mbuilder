const {apiModel} = require('./../models/api.model');

const apiController = (apiSchemas) => {
  apiSchemas.forEach((apiSchema) => {
    const schema = JSON.stringify(apiSchema.schema, null, 2).replace(/\"/g, "");
    apiModel(apiSchema.schemaName, apiSchema.returnValue, schema);
  });
}

module.exports = {apiController};
