import logo from './logo.svg';
import './App.css';

function App() {

  handleLogin = (info) => {
    console.log('login')
    this.handleAuthFetch(info, 'http://localhost:3000/login' )
  }

  handleSignup = (info) => {
    console.log('sign up')
    this.handleAuthFetch(info, 'http://localhost:3000/users')
  }

  handleAuthFetch = (info, request) => {
    fetch(request, {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        name: info.name,
        password: info.password
      })
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({user: data.user, token: data.token}, () => {
        this.props.history.push('/')
      })

    })
  }
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
