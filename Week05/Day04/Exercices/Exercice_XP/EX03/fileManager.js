const fs = require('fs');

function readFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return content;
  } catch (err) {
    console.error(`Error reading file "${filePath}":`, err.message);
  }
}

function writeFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Successfully wrote to file "${filePath}"`);
  } catch (err) {
    console.error(`Error writing to file "${filePath}":`, err.message);
  }
}

module.exports = {
  readFile,
  writeFile,
};
