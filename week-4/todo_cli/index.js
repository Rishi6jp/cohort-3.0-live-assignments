{/*/
    
    Filesystem based todo list.

    Create a `cli` that lets a user

    1. Add a todo
    2. Delete a todo
    3. Mark a todo as done

    Store all the data in files (todos.json) 

*/}

const { Command } = require('commander');
const program = new Command();
const fs = require('fs/promises')

program
  .name('todo-cli')
  .description('Filesystem based todo list')
  .version('1.0.0');

program.command('todos')
.description('Display Todo with status')
.action(async () => {
const filePath = "todo.json";
let todos = [];

try {
    const fileData = await fs.readFile(filePath, 'utf8');
    todos = JSON.parse(fileData);
} catch (err) {
    console.log("No todos yet.");
    return;
}

if (todos.length === 0) {
    console.log("Todo list is empty!");
    return;
}

todos.forEach((todo, index) => {
    console.log(`${index + 1}. ${todo.title} [${todo.done ? "✔" : "✘"}]`);
});
});

program.command('todo')
  .description('Add a todo')
  .argument('<todo>', 'todo to add')
  .action(async (todo) => {
    const filePath = "todo.json"
        let todos = []
    try{
        const fileData = await fs.readFile(filePath, 'utf8')
         todos = JSON.parse(fileData)
    } catch(err) {
        todos = []
    }
    todos.push({ title: todo, done: false})

    await fs.writeFile(filePath, JSON.stringify(todos, null, 2));
    console.log("todo added")
  })

program.command('del')
  .description('delete a todo')
  .argument('<index>', 'index of todo to delete')
  .action(async (index) => {
    const filePath = "todo.json"
    let todos = []

    try{
        const fileData = await fs.readFile(filePath, "utf8")
        todos = JSON.parse(fileData)
    } catch{
        console.log("No Todos Yet")
        return
    }

    if(todos === 0){
        console.log('todo list is empty')
        return
    }

    todos.splice(index-1, 1);

    console.log('todo deleted')

    await fs.writeFile(filePath, JSON.stringify(todos, null, 2))
  })

program.command('done')
  .description('Mark a todo as Done')
  .argument('<index>', 'index of todo to delete')
  .action(async (index) => {
    const filePath = "todo.json"
    let todos = []

    try{
        const fileData = await fs.readFile(filePath, "utf8")
        todos = JSON.parse(fileData)
    } catch{
        console.log("No Todos Yet")
        return
    }

    if(todos === 0){
        console.log('todo list is empty')
        return
    }

    todos[index-1].done = true;

    await fs.writeFile(filePath, JSON.stringify(todos, null, 2))
})
program.parse();