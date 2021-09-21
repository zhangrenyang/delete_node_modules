#!/usr/bin/env node
var spin = require('io-spin')
var glob = require('glob');
var fs = require('fs-extra');
var spinner = spin('cleaning node_modules recursively')
spinner.start()
const options = {}
glob("**/node_modules", options, function (err, dirs) {
  Promise.all(dirs.map(dir => fs.rm(dir,{recursive:true}).then(()=>console.log(`删除${dir}成功`)))).then(() => {
    spinner.stop()
    spinner.update('cleaning node_modules recursively')
  });
})
