import TaskItem from './TaskItem.jsx';
import { useEffect } from 'react';

import { fetchTasks } from '../redux/slices/tasks.js';
import { useDispatch, useSelector } from 'react-redux';

const TaskList = ({ remove }) => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);

  const istasksLoading = tasks.status === 'loading';
  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  if (!tasks.items.length) {
    return (
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        Постов не найдено, скорее создай его!
      </h1>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>to-do</h1>
      {istasksLoading ? (
        <TaskItem isLoading={true} />
      ) : (
        tasks.items.map((obj, index) =>
          istasksLoading ? (
            'loading'
          ) : (
            <TaskItem
              remove={remove}
              number={index + 1}
              task={obj}
              key={obj._id}
              date={obj.due_date}
            />
          )
        )
      )}
    </div>
  );
};

export default TaskList;
