import { useState } from 'react';

import TaskForm from '../components/TaskForm.jsx';
import TaskList from '../components/TaskList.jsx';
import Profile from '../components/Profile.jsx';
import classes from '../styles/app.module.css';
import MyButton from '../components/UI/button/MyButton.jsx';
import { useNavigate } from 'react-router';

function Completed() {
  let navigate = useNavigate();
  const [posts, setPosts] = useState([]);

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
          <MyButton onClick={() => navigate('/')}>Home</MyButton>
          <TaskForm create={createPost} />
        </div>

        <div className={classes.content}>
          {/* <TaskList remove={removePost} posts={posts} isLoading={false} /> */}
        </div>
      </div>
    </>
  );
}

export default Completed;
