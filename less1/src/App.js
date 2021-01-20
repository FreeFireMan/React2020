import React, {Component} from 'react';
import {usersAdres} from "./component/adr";
import AdrCompot from "./component/AdrCompot";

class App extends Component {

    render() {
        return (
            <div>
                {usersAdres.map((value,index) => <AdrCompot value={value} key={index}/>)}
            </div>
        );
    }
}

export default App;