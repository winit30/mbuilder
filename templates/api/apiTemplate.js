const {modules} = require('./modules');
const {toJson} = require('./apiFunctions/toJson');

const apiTemplate = (schemaName, returnValue, schema) => {

  var renderModules = '';

	for(key in modules) {
		let module = `const ${key} = ${modules[key]};\n`;
		renderModules += module;
	}

return `
${renderModules}
var ${schemaName}Schema = new mongoose.Schema(${schema}, {usePushEach: true});

${toJson(schemaName, returnValue)}

var ${schemaName} = mongoose.model('${schemaName}', ${schemaName}Schema);

module.exports = {${schemaName}};`;

}

module.exports = {apiTemplate};
