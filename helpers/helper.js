const path = require("path")

module.exports = function filePath(fileName) {
    return path.resolve(__dirname,"../","ejs",fileName);
}
