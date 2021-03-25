import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./userInfoCard.css";
export default (props) => {
  return (
    <Card
      style={{
        width: "12rem",
        height: "250px",
        display: "fluid",
        padding: "20px 0px",
        margin: "10px",
        border: "1px solid #4b3525",
        float: "left"
      }}
      className="text-center rounded shadow"
    >
      <Card.Img variant="top" src={props.data.Image} className="usr-img" />
      <Card.Body>
        <Link to={"/user/" + props.data.id}>
          <Card.Title>{props.data.name}</Card.Title>
        </Link>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
};
