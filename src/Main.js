import React,{Component} from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./Home";
import About  from "./About";
import Jobs from "./Jobs";
import Contact from "./Contact";
import "./index.css"

class Main extends Component{
    render(){
        return(
            <HashRouter>
            <div>
                <h1 class="ma" ><em >Boston Blossoms</em></h1>
                <br></br>
                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About Us</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/jobs">Jobs</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/jobs" component={Jobs}/>
                    <Route path="/contact" component={Contact}/>
                </div>
            </div>
            </HashRouter>

        )
    }
}

export default Main;