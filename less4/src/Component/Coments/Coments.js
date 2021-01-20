import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import CommentService from "./CommentService";
import Comment from "./Comment";
import FullComment from "./FullComment";
class Coments extends Component {
    commentService=new CommentService();
    state={comments:[]}
   async componentDidMount() {
        const comments = await this.commentService.comments();
        this.setState({comments});
    }

    render() {
        const {comments}=this.state;
        const {match:{url}}=this.props;
        return (
            <div>
                {comments.map(value => <Comment item={value} key={value.id}/>)}
                <hr/>
                <Switch>
                    <Route path={url+'/:id'} render={(props)=>{
                        const  {match:{params:{id}}}= props;
                        return <FullComment commentId={id} key={id}/>}}/>
                </Switch>
                <hr/>
            </div>
        );
    }
}

export default withRouter(Coments);