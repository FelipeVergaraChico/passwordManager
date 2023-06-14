import { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [display, setDisplay] = useState(false);
  const handleClick = () => {
    setDisplay(!display);
  };

  return (
    <>
      <h1>
        Gerenciador de senhas
      </h1>
      <div>
        { (display)
          ? <Form handleClick={ handleClick } />
          : <button onClick={ handleClick }>Cadastrar nova senha</button>}
      </div>
    </>
  );
}

export default App;
