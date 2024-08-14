import { useTaskDispatchContext } from '../TaskProvider';
import { Task } from '../types';

import { useState } from 'react';

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTaskDispatchContext();

  const deleteTaskHandler = (id: string) => {
    dispatch({
      type: 'task/delete',
      payload: { id },
    });
  };

  const switchTaskHandler = (id: string) => {
    dispatch({
      type: 'task/switch',
      payload: { id },
    });
  };

  const editTaskHandler = (id: string, text: string) => {
    dispatch({
      type: 'task/edit',
      payload: { id, text },
    });
  };

  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => switchTaskHandler(task.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={task.text}
          onChange={(e) => editTaskHandler(task.id, e.target.value)}
        />
      ) : (
        <p>{task.text}</p>
      )}
      <button
        onClick={() => {
          setIsEditing(!isEditing);
        }}
      >
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button onClick={() => deleteTaskHandler(task.id)}>Delete</button>
    </div>
  );
}
