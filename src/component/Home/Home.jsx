import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './Home.css'
import BlogPost from '../pages/BlogPost/BlogPost';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';

class Home extends Component{
    render(){
        return(
<Router>
<div className="navigation">
    <Link to="/">BlogPOst</Link>
    <Link to="/youtube">Youtube</Link>
</div>

<Route path="/" exact component={BlogPost}/>
<Route path="/detail/:detailPage" component={DetailPost}/>
{/* <Route path="/youtube" component={YoutubeComp}/> */}
</Router>

        )
    }
}

export default Home;