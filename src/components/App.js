import '../styles/App.scss';
import data from '../data/adalabers.json';
import { useState } from 'react';

function App() {
  // VARIABLES ESTADO
  const [dataAdalabers, SetDataAdalabers] = useState(data.results);
  console.log(dataAdalabers);

  // USEEFFECT ?

  //HANDLER
  const handleNewAda = (e) => {
    SetNewAda({ ...newAda, [e.target.name]: e.target.value });
  }
  const handleAddClick = (e) => {
    e.preventDefault();
    SetDataAdalabers([...dataAdalabers, newAda]);
  };

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML

  const htmlAdalabers = dataAdalabers.map((completTable) => {
    return (

      <tr key={completTable.id}>
        <td>{completTable.name}</td>
        <td>{completTable.counselor}</td>
        <td>{completTable.speciality}</td>
      </tr>
    );
  });
  const [newAda, SetNewAda] = useState({
    name: '',
    counselor: '',
    speciality: ''
  })



  return (
    <div className="App">
      <h1 className="title">ADALABERS</h1>
      <main>
        <table className="table">
          <thead><tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
          </tr></thead>
          <tbody> {htmlAdalabers}</tbody>
        </table>
        <section className='section'>
          <h2>Añadir una Adalaber</h2>
          <label htmlFor="name">Nombre</label>
          <input type="text" name='name' onInput={handleNewAda} />

          <label htmlFor="counselor"> Tutora</label>
          <input type="text" name='counselor' onInput={handleNewAda} />
          <label htmlFor="speciality"> Especialidad</label>
          <input type="text" name='speciality' onInput={handleNewAda} />
          <button onClick={handleAddClick} className='button' >Añadir una nueva Adalaber</button>
        </section>
      </main>


    </div>
  );
}

export default App;
