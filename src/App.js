import { BrowserRouter, Switch, Route } from 'react-router-dom';
import artigo from './Pages/artigoTest';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ artigo }/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
