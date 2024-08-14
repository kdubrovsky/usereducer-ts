import { ReducerAction, Task } from './types';

export default function taskReducer(
  tasks: Task[],
  action: ReducerAction
): Task[] {
  switch (action.type) {
    case 'task/add': {
      const newTask: Task = {
        id: crypto.randomUUID(),
        text: !action.payload.text ? '' : action.payload.text,
        done: false,
      };
      return [...tasks, newTask];
    }

    case 'task/delete': {
      return tasks.filter((task) => task.id !== action.payload.id);
    }

    case 'task/switch': {
      return tasks.map((task) =>
        action.payload.id === task.id ? { ...task, done: !task.done } : task
      );
    }
    case 'task/edit': {
      const newText = action.payload.text ?? '';
      return tasks.map((task) =>
        action.payload.id === task.id ? { ...task, text: newText } : task
      );
    }
    default:
      return tasks;
  }
}
