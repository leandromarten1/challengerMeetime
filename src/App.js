import { Switch, Route } from 'react-router-dom';
import AdicionarLead from './pages/AdicionarLead';
import Leads from './pages/Leads';

const App = () => {
  return (
    <Switch>
      <Route exact path='/leads' component={Leads} />
      <Route exact path='/leads/novo' component={AdicionarLead} />
    </Switch>
  );
};

export default App;
