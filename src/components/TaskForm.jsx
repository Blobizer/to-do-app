import { useState } from 'react';
import CreateWindow from './UI/modal/CreateForm/CreateWindow.jsx';
import MyButton from './UI/button/MyButton.jsx';

function TaskForm({ create }) {
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для открытия/закрытия модального окна

  const openModal = () => setIsModalOpen(true); // Открыть модальное окно
  const closeModal = () => setIsModalOpen(false); // Закрыть модальное окно

  const addNewPost = (post) => {
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    closeModal();
  };

  return (
    <>
      <CreateWindow
        addNewPost={addNewPost}
        isOpen={isModalOpen}
        closeModal={closeModal}
      />
      <MyButton onClick={openModal}>Create</MyButton>
    </>
  );
}

export default TaskForm;
