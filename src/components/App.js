import '../styles/App.scss';
import data from '../data/adalabers.json';
import { useState } from 'react';

function App() {
  // VARIABLES ESTADO
  const [dataAdalabers, SetDataAdalabers] = useState(data.results);
  console.log(dataAdalabers);
  const [searchAda, setSearchAda] = useState('');
  const [searchCons, setSearchCons] = useState('');

  // USEEFFECT ?

  //HANDLER

  const handleNewAda = (e) => {
    SetNewAda({ ...newAda, [e.target.name]: e.target.value });
  }
  const handleAddClick = (e) => {
    e.preventDefault();
    SetDataAdalabers([...dataAdalabers, newAda]);
  };
  const handleSearch = (e) => {
    setSearchAda(e.target.value);
  }
  const handleSearchCon = (e) => {
    setSearchCons(e.target.value);
  }

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML

  const htmlAdalabers = dataAdalabers
    .filter((filter) => filter.name.toLowerCase().includes(searchAda.toLocaleLowerCase()))
    .filter((filter) => filter.counselor === searchCons)



    .map((completTable) => {
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
        <label htmlFor="name">Nombre</label>
        <input type="text" name='name' onInput={handleSearch} />
        <select name="counselor" id="counselor" onChange={handleSearchCon}>Escoge una tutora
          <option value=""> Escoge una opción</option>
          <option value="Yanelis">Yanelis</option>
          <option value="Dayana"> Dayana</option>
          <option value="Ivan">Iván</option>
        </select>
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
          <input className='section__input' type="text" name='name' onInput={handleNewAda} />

          <label htmlFor="counselor"> Tutora</label>
          <input className='section__input' type="text" name='counselor' onInput={handleNewAda} />
          <label htmlFor="speciality"> Especialidad</label>
          <input className='section__input' type="text" name='speciality' onInput={handleNewAda} />
          <button onClick={handleAddClick} className='section__button' >Añadir una nueva Adalaber</button>
        </section>
      </main>


    </div>
  );
}

export default App;
