import './App.css';
import {useEffect} from 'react'
import LoginPage from './Containers/LoginPage'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Main from './Containers/Main';
import EditUser from './Components/EditUser';
import RecipesContainer from './Containers/RecipesContainer';
import SiteNavbar from './Components/SiteNavbar';
import {connect} from 'react-redux';
import {addRecipesToState} from './Actions/recipes';
import RecipeShowContainer from './Containers/RecipeShowContainer';    
import SearchResultsContainer from './Containers/SearchResultsContainer';
import NoSearchResults from './Components/NoSearchResults';
import FavoritesContainer from './Containers/FavoritesContainer';

function App({user, addRecipesToState}) {

  useEffect(() => {
    if (!user.name && localStorage.getItem('token')) {
      fetchRecipes()
    }
  },[])

  const fetchRecipes = () => {
    fetch('http://localhost:3000/recipes', configRecipeObj)
    .then(resp => resp.json())
    .then(data => {
      addRecipesToState(data)
    })
  }

  const configRecipeObj = () => {
    let token = localStorage.getItem('token')
    return {
      method: 'GET',
      headers: {
        'Content-Type': "application/json",
        'Authorization' : `Bearer ${token}`
      }
    }
  }

  return (
    <Router>
        <SiteNavbar/>
        <div id="app-container" >
          {localStorage.token ? null : <Redirect to='/login'/> }
          <Route exact path='/login' component={LoginPage}/>
          <Route exact path='/' component={Main}/>
          <Route exact path='/edit' component={EditUser}/>
          <Route exact path='/recipes' component={RecipesContainer}/>
          <Route exact path='/search' component={SearchResultsContainer}/>
          <Route exact path='/no-results' component={NoSearchResults}/>
          <Route exact path='/favorites' component={FavoritesContainer}/>
          <Route path='/recipes/:name' component={RecipeShowContainer}/>
        </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {user: state.user}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRecipesToState: (recipes) => dispatch(addRecipesToState(recipes))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);

