import React, {Component} from 'react';
import comet from "./FetchComments";


class Coments extends Component {
    comet = new comet;
    state ={ comments : []}

   async componentDidMount() {
        let comments = await this.comet.comments()
       this.setState({comments})
    }

    render() {
        let{comments}= this.state;
        return (
            <div>
                {
                    comments.map(value =><div>{value.body}</div>)
                }
            </div>
        );
    }
}

export default Coments;