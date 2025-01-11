import MyButton from '../../button/MyButton';

import classes from './profile.module.css';

function ProfileModal({ isOpen }) {
  if (!isOpen) return null; // Если модальное окно закрыто, ничего не рендерим

  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modalContent}>
        <MyButton>Completed</MyButton>
        <MyButton>Settings</MyButton>
        <MyButton>Logout</MyButton>
        <div></div>
      </div>
    </div>
  );
}

export default ProfileModal;
