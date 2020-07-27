import React , {Component, Fragment} from 'react';
import axios from 'axios';

class DetailPost extends Component{
    state = {
        detailpage:{
            title:'',
            body:''
        }
    }
    componentDidMount(){
        // console.log(this.props);
        let param = this.props.match.params.detailPage
        axios.get(`http://localhost:3004/posts/${param}`)
            .then(resultnya =>{
                // console.log('ini hail',resultnya);
                this.setState({
                    detailpage:{
                        title: resultnya.data.title,
                        body: resultnya.data.body
                    }
                })
            })
    }
    render(){
        // console.log(this.props);
        return(
           <Fragment>
            <p>{this.state.detailpage.title}</p>
            <p>{this.state.detailpage.body}</p>
        </Fragment>
        )
    }
}

export default DetailPost;