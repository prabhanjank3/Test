import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import { getUserWithId } from "../Utilities/userData";
class UserInfo extends Component {
  render() {
    const usr = getUserWithId(this.props.match.params.id);
    return (
      <section>
        <Navbar />
        <Container style={{ paddingTop: "30px" }}>
          <Row>
            <Col>
              <img
                src={usr.Image}
                alt={usr.name}
                style={{ width: "200px", height: "200px", borderRadius: "50%" }}
              />
            </Col>
            <Col style={{ paddingTop: "5%" }}>
              Id: {usr.id} <br />
              Name: {usr.name}
            </Col>
            <Col />
          </Row>
        </Container>
      </section>
    );
  }
  componentDidMount() {
    console.log();
  }
}
export default UserInfo;
