import './App.css';
import HomePage from './components/HomePage';
import Store from './components/Store';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import Browse from './components/Browse';
import Cart from './components/Cart';
import ProfilePage from './components/ProfilePage';
import {useState} from 'react'

function App() {

  const [ username, setUsername ] = useState("")

  return (
    <div>
     <BrowserRouter>
    <NavBar username={username} setUsername={setUsername}/>
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
      <Route exact path='/cart'>
        <Cart />
      </Route>
    <Route exact path='/profile-page'>
      <ProfilePage username={username}/>
    </Route>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
