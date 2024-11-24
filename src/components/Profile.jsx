import MyButton from "./UI/button/MyButton"
import { useState } from "react";
import ProfileModal from "./UI/modal/ProfileForm/ProfileModal";

function Profile() {
    const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для открытия/закрытия модального окна

    const openModal = () => setIsModalOpen(true); // Открыть модальное окно
    const closeModal = () => setIsModalOpen(false); // Закрыть модальное окно
  
  
  return (
      <>
      <ProfileModal isOpen={isModalOpen} closeModal={closeModal}></ProfileModal>
      <MyButton onClick={openModal}>Profile</MyButton>
      
      </>
  )
}

export default Profile
