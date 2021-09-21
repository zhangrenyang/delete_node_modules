#!/usr/bin/env node
var glob = require('glob');
var fs = require('fs-extra');
var chalk = require('chalk');
const options = {}
glob("**/node_modules/", options, function (err, dirs) {
  Promise.all(dirs.map(dir => fs.rm(dir, { recursive: true }).then(() => console.log(`\n${chalk.red('删除')} ${dir}`)))).then(() => {
    console.log(`删除任务${chalk.green('成功')}`);
  }).catch(err => {
    console.log(`删除任务${chalk.red('失败')}`, err);
  });
})
