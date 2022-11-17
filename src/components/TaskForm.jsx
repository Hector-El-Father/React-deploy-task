import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title, description);
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-500 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-4">Crea tus tareas</h1>
        <input
          placeholder="escribe una tarea"
          onChange={function (e) {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
          className="bg-slate-400 p-4 w-full mb-4"
        />
        <textarea
          placeholder="escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className='"bg-slate-400 p-4 w-full mb-4'
        ></textarea>
        <button className="bg-green-600 px-2 py-1  text-white font-bold rounded-md mt-4 hover:bg-green-400">
          Guardar
        </button>
      </form>
    </div>
  );
}
export default TaskForm;
