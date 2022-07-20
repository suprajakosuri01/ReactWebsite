import React from "react";
import manager from "./job1.jpeg";
import customercare from "./job2.jpeg";
import tech from "./job3.jpeg";
import employees from "./tittle";

class Jobs extends React.Component{
    render(){
        return( 
            <div>
                <h3>
                    Our Career Opportunities
                </h3>
      {employees.map((employee) => {
        const list = (
          <>
            <ul class="job">
              <li>Id: {employee.id}</li>
              <li>Name: {employee.name}</li>
              <li>City: {employee.city}</li>
            </ul>
            <hr />
          </>
        );
        return list;
      })}        
            <div>
                
                <div className = "wrapperjob">
                <Card img = {manager} title = "Store Manager" description = ""/>
                <Card img = {customercare} title = "Customer Suppport" description = ""/>
                <Card img = {tech} title = "Cashier" description = ""/>
                </div>
            </div> 
        </div> 
        )
    }
}

function Card(props) {
    return (
        <div className = "cardjob">
            <div className = "card_body">
                <img src ={props.img} alt = "job" class = "card_imagej"/>
                <h2 className = "card_titlej">{props.title}</h2>
                <p className = "card_descriptionj">{props.description}</p>
                <button className = "job_btnj"> Apply here</button>
            </div>
        </div>
    )    
}


  
export default Jobs;