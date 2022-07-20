import React,{Component} from "react";

class Contact extends Component{
    render(){
        return(
            <div>

                <form id="contact">
                    <h2>Leave us a message!</h2>
                    <br></br>
  
                    <input placeholder="Your name" type="text" tabindex="1" required autofocus></input>
  
    
                    <input placeholder="Your Email Address" type="email" tabindex="2" required></input>
    
    
                    <input placeholder="Your Phone Number" type="tel" tabindex="3" ></input>
    
    
                    <input placeholder="Your Web Site" type="url" tabindex="4" ></input>
    
    
                    <textarea placeholder="Type here" tabindex="5" required></textarea>
    
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>

                </form>
            </div>
        )
    }
}

export default Contact;