process.stdout.write('prompt > ');
const pwdRe = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  const arrCmd = cmd.split(' ');
  
  pwdRe(cmd);
  ls(cmd);
  cat(...arrCmd);
  
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});

