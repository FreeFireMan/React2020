import React, {Component} from 'react';
import postsSe from "./FetchPosts";


class Posts extends Component {
    postsSe = new postsSe()
    state = {posts : []}

   async componentDidMount() {
        let posts = await this.postsSe.title()
       this.setState({posts})
    }

    render() {
        let {posts} = this.state
        return (
            <div>
                {
                    posts.map(value => <div>{value.title}</div>)
                }
            </div>
        );
    }
}

export default Posts;