import '../styles/postItem.css'
import MyButton from './UI/button/MyButton.jsx'

function TaskItem(props) {

  
  return (
      <div className="post">
        <div className="post__content">
          <strong>{props.number}. {props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
        </div>
        <div >
        <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
        </div>
      </div>
  )
}

export default TaskItem
