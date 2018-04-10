const fs = require("fs");

var writeFile = (filepath, schema) => {
    fs.writeFileSync(filepath, schema , "utf8");
}

module.exports = {writeFile};
