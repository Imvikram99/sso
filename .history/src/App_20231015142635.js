import logo from './logo.svg';
import './App.css';
import Login from './Login';
import AzureLogin from './AzureLogin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App</h1>
        <Login />
        <AzureLogin></AzureLogin>
      </header>
    </div>
  );
}

export default App;
