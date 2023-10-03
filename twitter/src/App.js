import logo from './logo.svg';
import './App.css';
import MainPage from './components/pages/mainPage/mainpage';
import SignIn from './components/pages/signIn/signIn';
import SignUp from './components/pages/signUp/signUp';
import Drawer from './components/dashBoard/drawer/drawer';
import Home from './components/dashBoard/home/home';
import Router from './components/router/router';





function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <MainPage/> */}
      {/* <SignIn/> */}
      {/* <SignUp/> */}
      {/* <Drawer/> */}
      {/* <Home/> */}
      <Router/>
    
    </div>
  );
}

export default App;
