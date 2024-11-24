import { useState } from 'react';

import TaskForm from './components/TaskForm.jsx';
import TaskList from './components/TaskList.jsx';
import classes from './styles/app.module.css'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Заняться спортом', body: '10 отжиманий, 15 приседаний, 20 пресса'},
    {id: 2, title: 'Учиться', body: 'Прочитать книги'},
    {id: 3, title: 'Спать хорошо', body: 'Да и все'},
  ])
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  
  
  return (
    <>
    <div className={classes.container}>
      <div className={classes.menu}>
        <div className={classes.headmenu}>Menu</div>
        <TaskForm  create={createPost}/>
      </div>

      <div className={classes.content}>
        <TaskList remove={removePost}posts={posts} title={"to-do"}/>
      </div>
    </div>

    </>
  )
}

export default App