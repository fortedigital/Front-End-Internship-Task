import './App.css';
import EditIntern from './EditIntern';
import InternList from './InternList';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Switch>          
          <Route path="/interns/:id" exact>
            <EditIntern />
          </Route>
          <Route path="/">
            <InternList />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
