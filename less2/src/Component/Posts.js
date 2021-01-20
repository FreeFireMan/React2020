import React, {Component} from 'react';

class Posts extends Component {
    state = {posts : [] }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts =>{this.setState({posts})})
    }

    render() {

        let posts = this.state.posts
        console.log(posts)
        console.log(this.state.posts);
        return (
            <div>

                {
                    posts.map(post=>(<div>{post.userId}-{post.id}</div>))
                }
            </div>
        );
    }
}

export default Posts;