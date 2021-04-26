import { Switch, Route, Redirect } from 'react-router-dom';
import AdicionarLead from './pages/AdicionarLead';
import EditarLead from './pages/EditarLead';
import Leads from './pages/Leads';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/leads' />
      </Route>
      <Route exact path='/leads' component={Leads} />
      <Route exact path='/leads/novo' component={AdicionarLead} />
      <Route exact path='/leads/editar/:id' component={EditarLead} />
      <Route path='*' component={NotFound} />
    </Switch>
  );
};

export default App;
