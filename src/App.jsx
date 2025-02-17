import { useState } from "react"

function App() {

  const [todolist,setToDolist] = useState([
    {id:1 , taskName :  "React" , done : false},
    {id:2 , taskName :  "ToDo" , done : false},
    {id:3 , taskName :  "Resume" , done : false}
  ])
    const [newTask,setNewTask] = useState("")
    
  const addTask = (e) => {
    e.preventDefault()
    if(!newTask){
      alert("Enter a Task")
    }else{
      let newId = todolist.length + 1
      let newEntry = ({id : newId , taskName : newTask , done : false})
      setToDolist([...todolist , newEntry])
      setNewTask("")
    }
  }

  const deleteTask = (id) => {
    setToDolist(todolist.filter((item) => {
      return item.id != id
    }))
  }

  const doneTask = (id) => {
    setToDolist(todolist.map((item) => 
     item.id === id ? {...item,done : !item.done} : item
    ))
  }
 
  return (
    <div className="min-h-screen font-bold  flex flex-col pt-40 items-center bg-gradient-to-b from-fuchsia-700 to-black">
        <h1 className="text-white text-4xl">ToDo List</h1>

        <div >
          <form className="bg-white flex  px-8 py-3 rounded-lg my-5">
          <input value={newTask} onChange={(e) => {setNewTask(e.target.value)}} type="text" placeholder="Enter The Task" className="outline-none border-none" />
          <button onClick={addTask} className="bg-fuchsia-800 px-3 py-1 rounded-lg text-white">Add Task</button>
          </form>
        </div>

        <div className="text-white text-2xl font-semibold flex flex-wrap px-40 gap-8 ">
          {
            todolist.map((item , index) => {
              return(
                <div key={item.id} className="bg-gray-900 px-8 rounded-lg py-5">
                  <h1>{index+1}.{item.taskName}</h1>
                    <div className="text-lg font-thin mt-5 mb-2">
                      Status : 
                      {
                        item.done ? "Completed" : "Pending"
                      }
                    </div>
                  <div className="flex flex-col gap-2">
                    <button className="bg-fuchsia-800 rounded-lg px-5 py-2" onClick={() => {doneTask(item.id)}}>Update Status</button>
                    <button className="bg-fuchsia-800 rounded-lg px-5 py-2" onClick={() => {deleteTask(item.id)}}>Remove</button>
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default App
