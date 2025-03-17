type TodoItemProps = {
  id: number;
  description: string;
  done: boolean;
  onToggleDone: (id: number) => void;
  onDelete: (id: number) => void;
};

export const TodoItem = ({
  id,
  description,
  done,
  onToggleDone,
  onDelete,
}: TodoItemProps) => {
  return (
    <div className={`p-4 rounded-lg flex items-center gap-4 ${
      done ? 'bg-base-300' : 'bg-base-200'
    }`}>
      <input
        type="checkbox"
        className="checkbox checkbox-primary"
        checked={done}
        onChange={() => onToggleDone(id)}
      />
      <span className={`flex-1 ${done ? 'line-through opacity-75' : ''}`}>
        {description}
      </span>
      <button
        className="btn btn-circle btn-error btn-xs"
        onClick={() => onDelete(id)}
      >
        ✕
      </button>
    </div>
  );
};