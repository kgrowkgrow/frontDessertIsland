import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
 

const SearchBar = () => {
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
            <br/>
            <br/>
            <br/>
            <br/>

            <Button variant="primary" size="lg" block>
                See all recipes!
            </Button>
        </div>
    );
}

export default SearchBar;
