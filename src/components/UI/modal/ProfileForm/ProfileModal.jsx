import MyButton from '../../button/MyButton';

import classes from './profile.module.css';

function ProfileModal({isOpen, closeModal }) {


  if (!isOpen) return null;  // Если модальное окно закрыто, ничего не рендерим
  

  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modalContent}>
        

        <MyButton>Settings</MyButton>
        <MyButton>Logout</MyButton>
        <div>
 
        <MyButton onClick={closeModal}>Закрыть</MyButton>
        </div>
       
      </div>
    </div>
  );
}

export default ProfileModal;
