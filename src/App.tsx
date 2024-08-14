import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList';

import TaskProvider from './TaskProvider';

export default function App() {
  return (
    <TaskProvider>
      <AddTask />
      <TaskList />
    </TaskProvider>
  );
}
