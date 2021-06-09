// Imports
import React, { Component, useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
// CSS
import './App.css';
// Components
import Navbar from './components/Navbar';
// Pages
import Home from './pages/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer'
import NotFoundPage from './components/NotFoundPage'


// Private route component
const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log('This is a private route...')
    let user = localStorage.getItem('jwtToken');

    return <Route {...rest} render={(props) => {
        return user ? <Component {...rest} {...props} /> : <Redirect to='/login' />
    }} />
}


function App() {
    // Set state values
    const [currentUser, setCurrentUser] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    useEffect(() => {
        let token;
        // if there is no token inside localStorage, then the user is not authenticated
        if (!localStorage.getItem('jwtToken')) {
            console.log('is not authenticated...');
            setIsAuthenticated(false);
        } else {
            token = jwt_decode(localStorage.getItem('jwtToken'));
            console.log('token', token);
            setAuthToken(token);
            setCurrentUser(token);
        }
    }, []);

    const nowCurrentUser = userData => {
        console.log('--- inside nowCurrentUser ---');
        setCurrentUser(userData);
        setIsAuthenticated(true);
    }

    const handleLogout = () => {
        if (localStorage.getItem('jwtToken')) {
            localStorage.removeItem('jwtToken'); // if there is a token, then remove it
            setCurrentUser(null); // set the currentUser to null
            setIsAuthenticated(false) // set is auth to false
        }
    }

    return (
        <div className="App">
            <Navbar isAuth={isAuthenticated} handleLogout={handleLogout} />
            <Switch>
                {/* routes below */}
                <Route exact path='/' component={Home} />
                <Route path='/signup' component={Signup} />
                <Route path='/login'
                    render={(props) => <Login {...props} user={currentUser} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} />} />
<<<<<<< HEAD
                <Route path="*" component={NotFoundPage} />
=======
>>>>>>> cb1219edbc39953fdf521cbdbe5d95f552edc0ba
            </Switch>
            <Footer />

        </div>
    );
}

export default App;