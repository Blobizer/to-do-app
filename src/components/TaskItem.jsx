import '../styles/postItem.css';
import MyButton from './UI/button/MyButton.jsx';
import MyCheckBox from './UI/checkBox/MyCheckBox.jsx';

function TaskItem(props) {
  const date = new Date(props.date);
  console.log(props.date);
  const formattedDate = date.toLocaleString('ru-RU', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
  console.log(props);
  if (props.isLoading) {
    return (
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        Загрузка....!
      </h1>
    );
  }
  return (
    <div className="post">
      <div className="post__content">
        <MyCheckBox>
          {props.number}.{props.task.title}
        </MyCheckBox>
        <div>{props.task.text}</div>
      </div>
      <div className="contents">
        <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
        <div>{formattedDate}</div>
      </div>
    </div>
  );
}

export default TaskItem;
