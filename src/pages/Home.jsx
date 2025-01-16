import { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm.jsx';
import TaskList from '../components/TaskList.jsx';
import Profile from '../components/Profile.jsx';
import classes from '../styles/app.module.css';
import MyButton from '../components/UI/button/MyButton.jsx';
import { useNavigate } from 'react-router';

function Home() {
  let navigate = useNavigate();
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Заняться спортом',
      body: '10 отжиманий, 15 приседаний, 20 пресса',
    },
    { id: 2, title: 'Учиться', body: 'Прочитать книги' },
    { id: 3, title: 'Спать хорошо', body: 'Да и все' },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.menu}>
          <Profile />
          <MyButton onClick={() => navigate('/completed')}>Completed</MyButton>
          <TaskForm create={createPost} />
        </div>

        <div className={classes.content}>
          <TaskList remove={removePost} />
        </div>
      </div>
    </>
  );
}

export default Home;
