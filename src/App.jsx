import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Modal from "./components/Modal";
import LoginForm from './components/LoginForm';
import { useState } from 'react';

function App() {
  // Variable y función que maneja el estado del modal (Abierto o cerrado).
  const [isOpen, setOpen] = useState(false);

  function closeModal() {setOpen(false);}

  return (
    <div className="min-h-screen bg-zinc-50 overflow-hidden">
      <Header onOpen={() => setOpen(true)} onUserMenu={() => setUserMenu(true)} /> 
      <MainContent />
      <Footer />

      {isOpen && (
        <Modal onClose={closeModal}>
            <LoginForm onLoginSuccess={ closeModal } />
        </Modal>
      )}
    </div>
  )
}

export default App
