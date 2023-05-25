import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';


function App() {

  const times = [
    {
      nome:'InfraTI',
      corPrimaria:'#191970',
      corSecundaria:'#4682B4'
    },

    {
      nome:'SistemasTI',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF'
    },
    {
      nome:'Coordenador',
      corPrimaria:'#008B8B',
      corSecundaria:'#5F9EA0'
    },
    {
      nome:'Gerência',
      corPrimaria:'#4682B4',
      corSecundaria:'#B0C4DE'
    },

  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(time => <Time
       key={time.nome} 
       nome ={time.nome} 
       corPrimaria={time.corPrimaria} 
       corSecundaria={time.corSecundaria}
       colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome )}
       />)}
       <Rodape/>

    </div>
  );
}

export default App;

