import image1 from "./3.png";
import React, { Component } from "react";


class About extends Component {
  render() {
    return (
      <div>
        <Card></Card>
        <div>
          
      
        
        

       
                <div className = "wrapper">
 
                 <CardAbout img = {image1} title = "Let Boston Blossoms be your first choice for flowers." />
             
 
                 </div>
             </div>

             <div class="footer-infoItem footer-infoItem--hours col-xs-12 col-sm-4 col-md-4">
                <div class="headerhours">Hours of Operation</div>
            
                  
               
                
                                                   
                   <p class="hours"> 
                   < br></br>
                   <p>Monday: 9:00 am to 5:00 pm       </p>   <br></br>         
                   <p> Tuesday: 9:00 am to 5:00 pm    </p>   <br></br>          
                   <p> Wednesday: 9:00 am to 5:00 pm   </p>   <br></br>                     
                   <p> Thursday: 9:00 am to 5:00 pm </p>   <br></br>                        
                   <p> Friday: 9:00 am to 5:00 pm     </p>   <br></br>                 
                   <p>Saturday: 10:00 am to 3:00 pm  </p>   <br></br>  
                   </p>                
                                </div>

      </div>
    );
  }
}

class Square extends React.Component {
  render() {
    var squareStyle = {};

    return (
      <div style={squareStyle}>
        <br></br>
        <h2 class="ab" ><em >About The Company</em></h2>
        <br></br>
      </div>
    );
  }
}

class Label extends React.Component {
  render() {
    var labelStyle = {
      fontFamily: "sans-serif",
      fontSize: "20px",
      padding: 10,
      margin: 10,
      marginLeft: 10,
      marginRight: 10,
      color: "black",
      // backgroundColor: "#219ebc",
      borderRadius: "5px",
    };

    return (
      <p style={labelStyle}>
        

<i>Boston Blossoms has proudly served the Boston area for over 30 years. We are family owned and operated. We are committed to offering only the finest floral arrangements and gifts, backed by service that is friendly and prompt. Because all of our customers are important, our professional staff is dedicated to making your experience a pleasant one. That is why we always go the extra mile to make your floral gift perfect.</i>
        
      </p>

     
    );
  }
}


class Card extends React.Component {
  render() {
    var cardStyle = {
      padding: 0,
    };

    return (
      <div style={cardStyle}>
        <Square />
        <Label />
      </div>
    );
  }
}

function CardAbout(props) {
  return (
      <div className = "home_card">
          <div className = "card_body">
              <img src ={props.img} alt = "job" class = "card_image"/>
              <h4 className = "card_title">{props.title}</h4>
          </div>
      </div>
  )    
}
export default About;
