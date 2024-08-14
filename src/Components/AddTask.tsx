import { useState } from 'react';
import { useTaskDispatchContext } from '../TaskProvider';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTaskDispatchContext();

  const addTaskHandler = (text: string) => {
    dispatch({
      type: 'task/add',
      payload: { text },
    });
  };

  return (
    <>
      <input
        type="text"
        placeholder="add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          addTaskHandler(text);
          setText('');
        }}
      >
        Add new task
      </button>
    </>
  );
}
