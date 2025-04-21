// create a Todo http server ✔
// store it into an array ✔ than store it into a json file
// make it for different user

todos = [
    "we can do this",
        "nothing is stopping me",
        "I want it bad enough",
        "I've no time to worry",
        "THere's nothing stopping me"
]


const express = require('express')
const app = express();
const port = 3000

app.use(express.json())

// create a todo
app.post('/create-todo', (req, res) => {
    const {title} = req.body;
    todos.push({
        title: title
    })
    res.json({ message: "Todo added"})
})

//   .action(async (todo) => {
//     const filePath = "todo.json"
//         let todos = []
//     try{
//         const fileData = await fs.readFile(filePath, 'utf8')
//          todos = JSON.parse(fileData)
//     } catch(err) {
//         todos = []
//     }
//     todos.push({ title: todo, done: false})

//     await fs.writeFile(filePath, JSON.stringify(todos, null, 2));
//     console.log("todo added")
//   })

// delete a todo
app.delete('/del-todo', (req, res) => {
    const {index} = req.body;
    todos.splice(index, 1);
    res.json({ message: "Todo Deleted"})
})
// update a todo
app.put('/up-todo', (req, res) => {
    const {index , title} = req.body;
    todos[index].title= title
    res.json({ message: "Todo Updated"})
})
// see all todos
app.get('/todos', (req, res)=> {
    const title = todos.map(todo => todo.title);

    res.json({ todos: title});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})