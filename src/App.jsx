
import './App.css';
import Counter from './components/Counter/Counter';
import Text from './components/Text/Text';

import './components/usuario'
//import { Usuario } from './components/usuario';

function App() {

  


  return (
    <div>
      <Counter/>
      <Text/>
    </div>
    
  
    /*
    <div className="App">
      
      <Usuario 
      nombre='Alejandro'
      edad={29}
      nacionalidad='Mexicana'
      />

      <Usuario 
      nombre='Zaira'
      edad={28}
      nacionalidad='Mexicana'
      />
  
    </div>
    */
  ); 
}
  



/* const MostrarNombre = () => { //<----- Los componentes siempre deben empezar con letra mayúscula por convención
  return <h1>lorem</h1>
} */





export default App;
