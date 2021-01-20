import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
 

const SearchBar = (props) => {
    const history = useHistory()

    const goToRecipeIndex = () => {
        history.push('/recipes')
    }

    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Search</Form.Label>
                    <Form.Control type="email" placeholder="e.g. chocolate cake" />
                    <Form.Text className="text-muted">
                    Enter search terms here
                    </Form.Text>
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Form.Group>

            </Form>

            <br/>
            <br/>

            <Button variant="primary" size="lg" block onClick={goToRecipeIndex}>
                See all recipes!
            </Button>
        </div>
    );
}

export default SearchBar;
