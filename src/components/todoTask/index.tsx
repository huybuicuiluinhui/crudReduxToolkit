import React from 'react'
import { ITask } from '../Interfaces'
interface Props {
  task: ITask
  completeTask: (taskNameToDelete: string) => void
}
const ItemTask = ({ task, completeTask }: Props) => {
  return (
    <>
      <div>
        <div>{task.taskName}</div>
        <div>{task.deadline}</div>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName)
        }}
      >
        X
      </button>
    </>
  )
}

export default ItemTask
