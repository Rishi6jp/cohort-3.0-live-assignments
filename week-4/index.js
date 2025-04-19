
const { Command } = require('commander')
const program = new Command
const fs = require('fs')

program
  .name("count")
  .description("A simple cli took built for me")
  .version("1.0.0")

program.command('count')
  .description('Count the number of words in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, "utf8",(err, data) => {
      if(err){
        console.log(err)
      } else {
        const words = data.split(" ").length
        console.log(`There are ${words} words in a file ${file}`)
      }
    } )
  })

program.parse();