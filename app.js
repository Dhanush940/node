// npm - global command,comes with Node
// npm -v or npm --version to get the version of npm installed

// local dependency -use it only in this particular PromiseRejectionEvent
// npm i <packageName>

// global dependency -use it in any project 
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important infor about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything is set up as default)

// const _=require('lodash')
// const items=[1,[2,[3,[4]]]]
// const newItems=_.flattenDeep(items)
// console.log(newItems)

// (OR)

const {flattenDeep}=require('lodash')
const items=[1,[2,[3,[4,5]]]]
console.log(flattenDeep(items))