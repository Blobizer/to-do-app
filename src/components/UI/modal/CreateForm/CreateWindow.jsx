import { useState } from 'react';
import classes from'./modal.module.css'
import MyButton from '../../button/MyButton';
import MyInput from '../../Input/MyInput';

function CreateWindow({addNewPost,isOpen, closeModal }) {
  const [post, setPost] = useState({ title: '', body: '' })

  if (!isOpen) return null;  // Если модальное окно закрыто, ничего не рендерим
  
  const  NewPostHandler = () => {
    addNewPost(post)
    setPost({title: '', body: ''})
  }
      

  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modalContent}>
        <h2>Создайте задачу</h2>
        <div>Укажите заголовок</div>
        <MyInput
        value={post.title} 
        onChange={e => setPost({...post, title: e.target.value})}
        type="text" 
        placeholder='Text for title'
        />
        <div>Укажите Описание</div>
        <MyInput
          value={post.body} 
          onChange={e => setPost({...post, body: e.target.value})}
          type="text" 
          placeholder='Text for body'
        />
        <div>
        <MyButton onClick={NewPostHandler}>Создать</MyButton>
        <MyButton onClick={closeModal}>Закрыть</MyButton>
        </div>
       
      </div>
    </div>
  );
}

export default CreateWindow;
