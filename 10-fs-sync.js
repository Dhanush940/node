const {readFileSync,writeFileSync} = require('fs') 
// const fs=require('fs');
// fs.readFileSync;

const first=readFileSync('./content/first.txt','utf-8')
const second=readFileSync('./content/second.txt','utf-8')
// console.log(first,second)

// writeFileSync('./content/result.txt','Created the file using the command writeFileSync')
//Overrides the content of the file so add we need to add another argument.

writeFileSync('./content/result.txt','Created the file using the command writeFileSync',{flag:'a'})









