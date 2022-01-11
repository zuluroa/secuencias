import { Response } from './components/response';
import { BrowserRouter as Router, Switch, Route, Redirect, } from 'react-router-dom'

function App() {
  return (
    <div>
      <h2> LISTA DE SECUENCIA </h2>
      <Response />
      <Router>
        <Switch>
          <Route exact path="/respuesta/:id" component={Response} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
