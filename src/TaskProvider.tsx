import { ReactNode, useContext, useReducer } from 'react';
import { TaskDispatchContext, TasksContext } from './context';

import taskReducer from './reducer';
import initialTasks from './data';

interface TaskProviderProps {
  children: ReactNode;
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTaskDispatchContext() {
  return useContext(TaskDispatchContext);
}

export default function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
