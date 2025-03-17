import { ChangeEvent, FormEvent, useState } from "react";

type AddTaskFormProps = {
  onAddTask: (description: string) => void;
};

export const AddTaskForm = ({ onAddTask }: AddTaskFormProps) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask(task.trim());
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        className="input input-bordered flex-grow"
        placeholder="Ajouter une nouvelle tâche..."
        value={task}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        +
      </button>
    </form>
  );
};