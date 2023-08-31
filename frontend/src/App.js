
import './App.css';
import Header from './components/Header';
import Login from './components/login';
import Register from './components/register';
import Profile from './components/profile';
import Protected from './components/protected';
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/profile">
          <Protected Cmp={Profile}/>
        </Route>
      </BrowserRouter>
      
        
    </div>
  );
}

export default App;
