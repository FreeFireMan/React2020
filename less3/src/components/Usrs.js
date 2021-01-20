import React, {Component} from 'react';
import UsersService from "./Fetch";



class Usrs extends Component {
    state = { users : [] }
    usersServce = new UsersService();

   async componentDidMount() {
     let users =  await this.usersServce.users()
       this.setState({users})
    }

    click = ()=>{
    
    }


    render() {
       let {users} = this.state
        return (
            <div>
                {
                    users.map(user=><div>{user.name}<button onClick={this.click}>delete</button></div>)
                }
            </div>
        );
    }
}
export default Usrs;