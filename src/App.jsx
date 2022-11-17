import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
function app() {
  return (
    <main className="bg-gray-800 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default app;
