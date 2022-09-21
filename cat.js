const fs = require('fs');

module.exports = (...args) => {
  const arrArgs = [...args];
  const command = arrArgs[0];
  const fileName = arrArgs[1];
  
  if(command === 'cat'){
    fs.readFile(fileName, 'utf8', (err, files) => {
      if(err){
        throw err
      } else {
        process.stdout.write(files);
        process.stdout.write("prompt > ");
      }
    })
  }
}