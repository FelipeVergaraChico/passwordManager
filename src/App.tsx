import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import { DataType } from './components/type';
import PassWord from './components/PassType';

function App() {
  const [display, setDisplay] = useState(false);
  const [listaDeSenhas, setListaDeSenhas] = useState<DataType[]>([]);
  const handleClick = () => {
    setDisplay(!display);
  };

  const handlePasswordRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const alvo = event.target as HTMLButtonElement;
    setListaDeSenhas(listaDeSenhas.filter((i) => i.serviço !== alvo.id));
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement>,
    novaSenha: DataType,
  ) => {
    event.preventDefault();
    setListaDeSenhas([
      ...listaDeSenhas,
      novaSenha,
    ]);
  };

  return (
    <>
      <h1>
        Gerenciador de senhas
      </h1>
      <div>
        { (display)
          ? <Form handleClick={ handleClick } handleSubmit={ handleSubmit } />
          : <button onClick={ handleClick }> Cadastrar nova senha</button>}
        { (listaDeSenhas.length > 0)
          ? (listaDeSenhas.map((serv) => {
            return (
              <PassWord
                key={ serv.serviço }
                data={ serv }
                onClick={ handlePasswordRemove }
              />
            );
          }))
          : <h3>Nenhuma senha cadastrada</h3>}
      </div>
    </>
  );
}

export default App;
