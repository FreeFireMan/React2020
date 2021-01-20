import React, {Component} from 'react';
import CommentService from "./CommentService";

class FullComment extends Component {
    state = {comment :null};
    commentService=new CommentService();

    async componentDidMount() {
        const {commentId} = this.props;
        const comment = await this.commentService.comment(commentId);
        this.setState({comment})
    }

    render() {
        const {comment} = this.state;
        return (
            <div>
                {comment&&<div>{comment.name}-{comment.email}</div>}
            </div>
        );
    }
}

export default FullComment;