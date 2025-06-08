const fs = require('fs');
const path = require('path');

function readAndDisplayFile() {
  const filePath = path.join(__dirname, 'files', 'file-data.txt');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }
    console.log('File content:\n', data);
  });
}

module.exports = readAndDisplayFile;
