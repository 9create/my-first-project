import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
  Hello from May's first React App!
</p>
<h2>Welcome to Codespaces</h2>
<h2>React is amazing!</h2>
<h3 style={{color: 'orange'}}>Version Control is Amazing!</h3>
<p>This is my second version of the app</p>
<button style={{backgroundColor: 'green', color: 'white', padding: '10px 20px'}} onClick={() => alert('Hello!')}>
  Click Me!
</button>npm
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
