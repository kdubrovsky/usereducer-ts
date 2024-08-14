import TaskItem from './TaskItem';
import { useTasks } from '../TaskProvider';

export default function TaskList() {
  const tasks = useTasks();

  return tasks.length === 0 ? (
    <h1>There are no tasks</h1>
  ) : (
    tasks.map((task) => <TaskItem key={task.id} task={task} />)
  );
}
