import '../styles/postItem.css';
import MyButton from './UI/button/MyButton.jsx';
import MyCheckBox from './UI/checkBox/MyCheckBox.jsx';

function TaskItem(props) {
  return (
    <div className="post">
      <div className="post__content">
        <MyCheckBox>
          {props.number}.{props.post.title}
        </MyCheckBox>
        <div>{props.post.body}</div>
      </div>
      <div>
        <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
      </div>
    </div>
  );
}

export default TaskItem;
