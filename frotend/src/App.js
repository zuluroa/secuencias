import { Response } from './components/response';
import { BrowserRouter as Router, Switch, Route, Redirect, } from 'react-router-dom'
import { Formulario } from './components/Formulario';

function App() {
  return (
    <div>
      <h2 className='text-center mt-3 text-primary'> LISTA DE SECUENCIA </h2>
      <h6 className='text-center mt-2 fw-light'> by: David Zuluaga, Johan Ramirez</h6>
      <hr />
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
