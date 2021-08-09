import {useState} from 'react';
import React from 'react';
import Task from './task';
import Done from './done'

type propsTodo = {
    id: number;
    name: string;
}

const Todoo = () => {

    const [curTask, setCurTask] = useState<string>('')
    const [tasks, setTasks] = useState<propsTodo[]>([])
    const [donetasks, setdoneTasks] = useState<propsTodo[]>([])
  
    const onChangeCallback = (ev: React.ChangeEvent<HTMLInputElement>) => {
      setCurTask(ev.target.value)
    }

    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
      if(ev.key ==='Enter')
      addTask(curTask)
    }
  
    const addTask = (taskName: string) => {
      if(curTask === ""){
        alert("Task cannot be empty!")
      }else{
        const newId = (new Date()).getTime()
        const newTasks = [...tasks, {id: newId, name: taskName}]
        setTasks(newTasks)
      }
    }
  
    const deleteTask = (id: number) => {
      const newTasks = tasks.filter(x => x.id !== id)
      setTasks(newTasks)
    }

    const doneTask = (id: number, name: string) => {
      const newId = (new Date()).getTime()
      const newdonTasks = [ {id: newId, name: name},...donetasks]
      setdoneTasks(newdonTasks)
      const newTasks = tasks.filter(x => x.id !== id)
      setTasks(newTasks)
  }
  
    return (
      <div className='space-x-1 px-24 mx-auto max-w-6xl'>
        <div className='flex'>
        <input className='border border-gray-400 w-full text-2xl' onChange={onChangeCallback} onKeyDown={onKeyDownCallback}></input>
        <button className='border border-gray-400 w-8 font-bold' onClick={() => addTask(curTask)}>+</button>
        </div>
        <div>
          {tasks.map( x => <Task id={x.id} name={x.name} deleteFn={deleteTask} doneFn={doneTask}/>)}
          {donetasks.map( x => <Done id={x.id} name={x.name}/>)}
        </div>
      </div>
    )
  }
  
  export default Todoo