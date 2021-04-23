import { Switch, Route } from 'react-router-dom';
import AdicionarLead from './pages/AdicionarLead';
import EditarLead from './pages/EditarLead';
import Leads from './pages/Leads';

const App = () => {
  return (
    <Switch>
      <Route exact path='/leads' component={Leads} />
      <Route exact path='/leads/novo' component={AdicionarLead} />
      <Route exact path='/leads/editar/:id' component={EditarLead} />
    </Switch>
  );
};

export default App;
