import React,{Component} from "react";
import image1 from "./1.jpg";
import image2 from "./2.jpg";



class Home extends Component{
    render(){
        return(

            <div>
                

       
               <div className = "wrapper">

                <Card img = {image1} title = "SPRING BOUQUETS" description = "Welcome the warmer weather with a colorful spring flower arrangement."/>
                <Card img = {image2} title = "BIRTHDAY FLOWERS" description = "Look no further than Boston Blossoms for birthday gifts!"/>
            

                </div>
            </div>
        )
    }
}


function Card(props) {
    return (
        <div className = "home_card">
            <div className = "card_body">
                <img src ={props.img} alt = "job" class = "card_image"/>
                <h2 className = "card_title">{props.title}</h2>
                <p className = "card_description">{props.description}</p>
                <button className = "card_btn">Shop Now</button>
            </div>
        </div>
    )    
}







export default Home;