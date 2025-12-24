import { useState, useEffect } from 'react'
import TodoList from '../components/todoList'
import CreateTaskForm from '../components/CreateTaskForm'
import { Task } from '../types/Task'

function App() {

  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    const response = await fetch("http://127.0.0.1:5000/tasks")
    const data = await response.json()
    setTasks(data.tasks)
    console.log(data.tasks)
  }

  return (
    <>
      <TodoList tasks={tasks} />
      <CreateTaskForm />
    </>
  )
}

export default App
