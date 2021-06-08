import axios from 'axios';

// This utility will add the authorized user's JWT to the request header
// Any routes that are protected will require the JWT in order to access them.

const setAuthToken = (token) => {
    if (token) {
        // if there is a token, apply the token to every request header
        axios.default.headers.common['Authorization'] = token;
        console.log(`~~~~~~Headers~~~~~~~~`)
        console.log(axios.default.headers.common)
    } else {
        delete axios.default.headers.common['Authorization']
        // if there is not a token, reomve the authorization
    }
}

export default setAuthToken;