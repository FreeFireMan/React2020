import React, {Component} from 'react';
import Posts from "./components/Posts";
import Coments from "./components/Coments";
import Usrs from "./components/Usrs";
import {
  BrowserRouter as Router,
    Switch,
  Route,
  Link
} from "react-router-dom";



class App extends Component {
    render() {
        return (
           <Router>
             <div>
               <Link to={'/users'}>users</Link>
             </div>
             <div>
               <Link to={'/posts'}>posts</Link>
           </div>
             <div>
               <Link to={'/coments'}>coments</Link>
               <Switch>
                 <Route path={'/users'}><Usrs/></Route>
                 <Route path={'/posts'}><Posts/></Route>
                 <Route path={'/coments'}><Coments/></Route>
               </Switch>
             </div>
           </Router>
        );
    }
}

export default App;