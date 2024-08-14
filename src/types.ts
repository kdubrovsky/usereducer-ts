export interface Task {
  id: string;
  text: string;
  done: boolean;
}

export interface ReducerAction {
  type: string;
  payload: {
    id?: string;
    text?: string;
  };
}

export type TasksDispatchFunction = (value: ReducerAction) => void;
