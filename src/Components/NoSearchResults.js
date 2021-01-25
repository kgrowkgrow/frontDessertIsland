import React from 'react';
import {Alert, Button} from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const NoSearchResults = () => {
    
    const history = useHistory()
    return (
        <div>  
            <Alert variant='danger'>No recipes match the search term </Alert>
            <Button variant='dark' onClick={()=> {history.push('/')}}>Back to Home</Button>
        </div>
    );
}

export default NoSearchResults;
