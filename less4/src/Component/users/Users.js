import React, {Component} from 'react';
import UserService from "../UserService/UserService";
import User from "../user/User";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import FullUser from "../FullUser/FullUser";

class Users extends Component {
    userService=new UserService()
    state = {users : []}

    async componentDidMount() {
    const users = await this.userService.users();
    this.setState({users});
    }

    render() {
       const {users} = this.state;
       const {match:{url}} = this.props;
        return (
            <div>
                {users.map(value => <User item={value} key={value.id}/>)}
                <hr/>
                <Switch>
                    <Route path={url+'/:id'} render={(props)=>{
                        const {match:{params:{id}}} = props;
                        return <FullUser userId={id} key={id}/>}}/>
                </Switch>
                <hr/>
            </div>
        );
    }
}

export default withRouter(Users);