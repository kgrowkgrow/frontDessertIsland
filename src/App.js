import './App.css';
import LoginPage from './Containers/LoginPage'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Main from './Containers/Main';
import EditUser from './Components/EditUser';


function App() {

  return (
    <Router>
      <Container className="App d-flex flex-column align-items-center">
        {localStorage.token ? null : <Redirect to='/login'/> }
        <Route exact path='/login' component={LoginPage}/>
        <Route exact path='/' component={Main}/>
        <Route exact path='/edit' component={EditUser}/>
      </Container>
    </Router>
  );
}

export default App;

//authorization for fetch requests - grab token from state and, in headers, write: 
// ... headers: {
//   'Content-Type': 'application/json',
//   'Authorization' : `Bearer ${token}`
// }
// and I'm getting the token from localStorage
