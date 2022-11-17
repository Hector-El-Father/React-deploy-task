import TaskCard from './TaskCard'
  import {useContext} from 'react'
  import {TaskContext} from '../context/TaskContext'
function TaskList() {
  const {tasks}=useContext(TaskContext)
  if (tasks.length === 0) {
    return <h1 className='text-white font-bold text-4xl text-center'>no hay tareas aun</h1>;
  }
  return (
    <div className='grid grid-rows-3 gap-3'>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}/>
      ))}
    </div>
  );
}

export default TaskList;
