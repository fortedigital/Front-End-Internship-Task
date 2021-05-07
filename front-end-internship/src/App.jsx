import './App.css';
import EditUser from './EditUser';
import UserList from './UserList';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Switch>          
          <Route path="/users/:id" exact>
            <EditUser />
          </Route>
          <Route path="/">
            <UserList />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
