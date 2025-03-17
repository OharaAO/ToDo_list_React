import { useState } from "react";
import { TodoItem } from "./task/task";
import { SearchBar } from "./searchbar/searchbar";
import { AddTaskForm } from "./form/AddTaskForm";

type Task = {
  id: number;
  description: string;
  done: boolean;
};

export const TodoApp = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, description: "Acheter des oranges", done: false },
    { id: 2, description: "Courir avec le fraté", done: false },
    { id: 3, description: "Me faire défoncer à Lol", done: false },
  ]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddTask = (description: string) => {
    const newTask = {
      id: Date.now(),
      description,
      done: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleToggleDone = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks
    .filter(task =>
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">Todo List Ohara </h1>
      
      <SearchBar onSearch={setSearchQuery} />
      
      <AddTaskForm onAddTask={handleAddTask} />

      <div className="flex flex-col gap-2 mt-6">
        {filteredTasks.map(task => (
          <TodoItem
            key={task.id}
            {...task}
            onToggleDone={handleToggleDone}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};