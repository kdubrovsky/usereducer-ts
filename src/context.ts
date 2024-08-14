import { createContext } from 'react';
import { Task, TasksDispatchFunction } from './types';

export const TasksContext = createContext<Task[]>([]);
export const TaskDispatchContext = createContext<TasksDispatchFunction>(
  () => {}
);
