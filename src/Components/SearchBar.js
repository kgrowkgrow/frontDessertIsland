import React, { useState } from 'react';
import {Button, InputGroup, FormControl} from 'react-bootstrap';
import {connect} from 'react-redux';
import { useHistory } from "react-router-dom";

 

const SearchBar = ({recipes}) => {

    const history = useHistory()
    const [search, setSearch] = useState("")

    const handleSearch = () => {
        let searchedRecipes = recipes.filter(recipe => recipe.name.includes(search))
        console.log(searchedRecipes)
        
    }

    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <InputGroup className="mb-3">
            <FormControl
            placeholder="Search desserts"
            onChange={handleSearchChange}
            />
            <InputGroup.Append>
            <Button variant="outline-primary" onClick={handleSearch}>Search</Button>
            </InputGroup.Append>
        </InputGroup> 
    );
}

const mapStateToProps = (state) => {
    return {recipes: state.recipes}
  }

export default connect(mapStateToProps) (SearchBar);
