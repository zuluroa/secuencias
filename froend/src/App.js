import { Response } from './components/response';
import { BrowserRouter as Router, Switch, Route, Redirect, } from 'react-router-dom'
import { Formulario } from './components/Formulario';

function App() {
  return (
    <div>
      <h2> LISTA DE SECUENCIA </h2>
      <Router>
        <Switch>
        <Route exact path="/" component={Formulario} />
          <Route exact path="/respuesta/:id" component={Response} />
          <Redirect to="/" component={Formulario} />
        </Switch>
      </Router>
     
    </div>

  );
}

export default App;
