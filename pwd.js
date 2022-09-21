module.exports = (para) => {
  if(para === 'pwd'){
    process.stdout.write(process.cwd());
  }
}