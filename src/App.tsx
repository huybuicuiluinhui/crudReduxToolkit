import React, { ChangeEvent, FC, useState } from 'react'
import { ITask } from './components/Interfaces'
import ItemTask from './components/todoTask'
import Blog from './pages/blog'
// const App: FC = () => {
//   const [task, setTask] = useState<string>('')
//   const [deadline, setDeadline] = useState<number>(0)
//   const [todoList, setTodoList] = useState<ITask[]>([])
//   const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
//     if (event.target.name == 'task') {
//       setTask(event.target.value)
//     } else {
//       setDeadline(Number(event.target.value))
//     }
//   }
//   const addTask = (): void => {
//     const newTask = {
//       taskName: task,
//       deadline: deadline
//     }
//     setTodoList([...todoList, newTask])
//     setTask('')
//     setDeadline(0)
//     console.log(todoList)
//   }
//   const completeTask = (taskNameToDelete: string): void => {
//     setTodoList(
//       todoList.filter((task) => {
//         return task.taskName !== taskNameToDelete
//       })
//     )
//   }
//   return (
//     <div className='App'>
//       <div className='header'>
//         <div className='inputContainer'>
//           <input type='text' placeholder='Task...' name='task' value={task} onChange={handleChange} />
//           <input
//             type='number'
//             placeholder='Deadline (in days)...'
//             name='deadline'
//             value={deadline}
//             onChange={handleChange}
//           />
//         </div>
//         <button onClick={addTask}>Add task</button>
//       </div>
//       <div className='todoList'>
//         {todoList.map((task: ITask, key: number) => {
//           return <ItemTask key={key} task={task} completeTask={completeTask} />
//         })}
//       </div>
//     </div>
//   )
// }
function App() {
  return (
    <div className='App'>
      <Blog />
    </div>
  )
}
export default App
