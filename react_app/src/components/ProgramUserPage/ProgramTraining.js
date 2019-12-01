import React from "react";
import { Card } from "react-bootstrap";
import programTrainingImg from "../../img/program.png";
import "./ProgramUserPage.css";

class ProgramTraining extends React.Component {
    render() {
        return (
            <div id="programTraining">
                <h1>
                    Welcome to Feeding Canadian Kids!
                </h1>
                <h2 style={{textAlign:"left"}}>
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
                        <Card.Img variant="top" src={programTrainingImg} />
                        <Card.Title
                            style={{
                                marginLeft: "20px",
                                marginTop: "10px"
                            }}
                        >
                            Onboarding Guide
                    </Card.Title>
                        <Card.Text
                            style={{
                                marginLeft: "20px",
                                marginRight: "20px"
                            }}
                        >
                            This guide will walk you through the delivery process,
                            from getting prepared, inputting an order,
                            tracking the order and troubleshooting delivery issues.
                    </Card.Text>
                        <Card.Body>
                            <Card.Link
                                className="cardLink"
                                href="https://docs.google.com/presentation/d/1A4Fo3A-ZxdzBpn-utPoyHlG0Iqaot7cVBn6y4Z32qvo/edit?usp=sharing"
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

export default ProgramTraining
