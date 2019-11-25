import React from "react";
import { Card } from "react-bootstrap";
import restaurantTrainingImg from "../../img/restaurant.png";
import "./RestaurantUserPage.css";

class RestaurantTraining extends React.Component {
    render() {
      return (
        <div id="programTraining">
            <h1>
                Welcome to Feeding Canadian Kids!
            </h1>
            <h2> 
                Click below to get all you need to know
            </h2>
            <div>
                <Card 
                    style={{ 
                        width: '40rem',
                        marginTop: "30px",
                        marginBottom: "30px"
                    }}
                >
                    <Card.Img variant="top" src= {restaurantTrainingImg}/>
                    <Card.Title 
                        style = {{
                            marginLeft:"20px",
                            marginTop:"10px"
                        }}
                    >
                        Onboarding Guide
                    </Card.Title>
                    <Card.Text 
                        style={{
                            marginLeft:"20px", 
                            marginRight:"20px"
                        }}
                    >
                        This guide will walk you through 
                        how to use the Uber Eats tablet and 
                        what to look for when accepting the scheduled orders 
                        that will be delivered to the after school programs.
                    </Card.Text>
                    <Card.Body>
                        <Card.Link 
                            className="cardLink"
                            href="https://docs.google.com/presentation/d/1bL74v2nxmysxlHgh_R8yNaWrU_Pk_-uFPKs6f9uMFvM/edit?usp=sharing"
                        >
                            View here
                        </Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
      );
    }
  }

  export default RestaurantTraining
  