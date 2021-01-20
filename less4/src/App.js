import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Users from "./Component/users/Users";
import Coments from "./Component/Coments/Coments";

class App extends Component {


    render() {
        return (
            <Router>
            <div>
                <ul>
                    <li><Link to={'/users'}>Users</Link></li>
                    <li><Link to={'/comments'}>Comments</Link></li>
                        <li><Link to={'/posts'}>Posts</Link></li>

                </ul>
            </div>
                <Switch>
                    <Route path={'/users'} render={(props)=>{return <Users/>}}/>
                    <Route path={'/comments'} render={(props)=>{return <Coments/>}}/>
                    <Route path={'/posts'} render={(props)=>{return <Users/>}}/>
                </Switch>
            </Router>

        );
    }
}

export default App;
