// src/App.jsx
import React, { useState } from 'react';  // Asegúrate de importar useState
import './App.css';
import Button from './components/Button/Button.jsx';
import InfoCard from './components/InfoCard/InfoCard.jsx';
import TodoList from './components/TodoList/TodoList.jsx';
import Modal from './components/Modal/Modal.jsx';
import RegistrationForm from './components/RegistrationForm/RegistrationForm.jsx';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleClick = () => {
    alert('Button clicked!');
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App</h1>
      </header>
      <main>
        <section>
          <h2>Button Component</h2>
          <Button label="Click Me" onClick={handleClick} />
        </section>
        <section>
          <h2>InfoCard Component</h2>
          <InfoCard title="Info Card Title" content="This is some content for the info card." />
        </section>
        <section>
          <h2>TodoList Component</h2>
          <TodoList />
        </section>
        <section>
          <h2>Modal Component</h2>
          <button onClick={openModal}>Open Modal</button>
          <Modal isVisible={isModalVisible} onClose={closeModal}>
            <p>This is a modal!</p>
          </Modal>
        </section>
        <section>
          <h2>RegistrationForm Component</h2>
          <RegistrationForm />
        </section>
      </main>
    </div>
  );
}

export default App;
