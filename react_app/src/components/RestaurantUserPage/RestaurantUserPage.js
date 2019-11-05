import React from "react";
import {Container, Row, Col, Image, Nav, Tab} from "react-bootstrap";
import FeedingCKbanner from '../../img/FeedingCK-banner.png';


// import FeedCKOneKid from '../../img/feedingCK-one-kid.jpg';
import WelcomeMessage from "./WelcomeMessage.js";
import "./RestaurantUserPage.css";


class RestaurantUserPage extends React.Component{

    componentDidMount(){
        document.body.classList.add("hunnid");
        document.documentElement.classList.add("hunnid");
    }

    componentWillUnmount(){
        document.body.classList.remove("hunnid");
        document.documentElement.classList.remove("hunnid");
    }



    render() {
        return(
        <>   
            <div className="trial">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="no-scroll m-height" >
                <Row className="no-scroll m-height">
                    <Col sm={2} className="pill-tabs-color m-height">
                        <Nav variant="pills" className="flex-column pill-tabs">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                 <Nav.Link eventKey="second">Your Orders</Nav.Link>
                             </Nav.Item>
                             <Nav.Item>
                                 <Nav.Link eventKey="third">Your Partners</Nav.Link>
                             </Nav.Item>
                        </Nav>
                    </Col>
                        <Col sm={10} className="m-height">
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <WelcomeMessage/> 
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    Wagwan
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    Wagwan
                                </Tab.Pane>

                            </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            </div>

        </> 
        );
    }
}

export default RestaurantUserPage;