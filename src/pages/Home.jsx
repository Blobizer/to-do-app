import { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm.jsx';
import TaskList from '../components/TaskList.jsx';
import Profile from '../components/Profile.jsx';
import classes from '../styles/app.module.css';
import MyButton from '../components/UI/button/MyButton.jsx';
import { useNavigate } from 'react-router';
import { logout, selectIsAuth } from '../redux/slices/auth.js';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
  const isAuth = useSelector(selectIsAuth);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, [isAuth, navigate]);

  console.log(isAuth);
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

  const onClickLogout = () => {
    dispatch(logout());
    window.localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.menu}>
          <Profile />
          <MyButton onClick={() => navigate('/completed')}>Completed</MyButton>
          <TaskForm create={createPost} />
          <MyButton onClick={onClickLogout}>logout</MyButton>
        </div>

        <div className={classes.content}>
          <TaskList remove={removePost} />
        </div>
      </div>
    </>
  );
}

export default Home;
