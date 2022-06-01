import './App.css';
import HomePage from './components/HomePage';
import Store from './components/Store';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import Browse from './components/Browse';

function App() {
  return (
    <div>
     <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/store">
        <Store />
      </Route>
      <Route exact path="/browse">
        <Browse />
      </Route>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
