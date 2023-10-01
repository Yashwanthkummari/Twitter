import logo from './logo.svg';
import './App.css';
import MainPage from './components/pages/mainPage/mainpage';
import SignIn from './components/pages/signIn/signIn';
import SignUp from './components/pages/signUp/signUp';


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
      <MainPage/>
      {/* <SignIn/> */}
      {/* <SignUp/> */}
    </div>
  );
}

export default App;
