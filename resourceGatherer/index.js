const UglifyJS = require('uglify-js');
const fs = require('fs');
const { resolve } = require('path');

const getFileContent = (relativePath) => {
  const codePath = resolve(process.cwd(), relativePath);
  const code = fs.readFileSync(codePath, "utf8");
  const minifiedCode = UglifyJS.minify(code).code;
  const readyForFile = `export default ${minifiedCode}`;
}

const writeFileContent = (relativePath, content) => {
  const filePath = resolve(process.cwd(), relativePath);
  fs.writeFile(relativePath, content);
}

writeFileContent('./src/test.js', getFileContent('./node_modules/aframe/build/aframe.js'));
