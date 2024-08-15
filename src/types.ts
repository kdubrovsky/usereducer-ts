export interface Task {
  id: string;
  text: string;
  done: boolean;
}

type ReducerActionTypes = 'task/add'| 'task/delete' | 'task/switch' | 'task/edit';

export interface ReducerAction {
  type: ReducerActionTypes;
  payload: {
    id?: string;
    text?: string;
  };
}

export type TasksDispatchFunction = (value: ReducerAction) => void;
