import React, {Component} from 'react';
import UserService from "../UserService/UserService";

class FullUser extends Component {
    state = {user: null};
    userService = new UserService();

   async componentDidMount() {
        const {userId} = this.props;
        const user = await this.userService.user(userId);
        this.setState({user});
       console.log(user);

   }

    render() {
        const {user} = this.state;

        return (
            <div>
                {user&&<div>{user.id}-{user.name}-{user.phone}</div>}
            </div>
        );
    }
}

export default FullUser;