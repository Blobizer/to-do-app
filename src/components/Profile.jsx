import MyButton from './UI/button/MyButton';
import { useState } from 'react';
import ProfileModal from './UI/modal/ProfileForm/ProfileModal.jsx';

function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для открытия/закрытия модального окна

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <ProfileModal isOpen={isModalOpen}></ProfileModal>
      <MyButton onClick={toggleModal}>Profile</MyButton>
    </>
  );
}

export default Profile;
