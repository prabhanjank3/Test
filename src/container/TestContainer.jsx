import React, { Component } from "react";
import TestComponent from "../component/TestComponent";
import Navbar from "../container/Navbar/Navbar";
import "./css/TestContainer.css";
import { connect } from "react-redux";
import { userData } from "../Utilities/userData";
import UserinfoCard from "../component/userInfoCard";
import { Container } from "react-bootstrap";
import { getAllUserInfo } from "../Utilities/ApiRequests";
class TestContainer extends Component {
  render() {
    //console.log(userData);
    return (
      <>
        <section className="nav-section">
          <Navbar />
        </section>
        <section className="body-section">
          <TestComponent testValue={this.props.testValue}></TestComponent>
          <Container></Container>
          {userData.map((element, index) => {
            return <UserinfoCard data={element} />;
          })}
          ;
        </section>
        <section className="footer-section"></section>
      </>
    );
  }
  componentDidMount() {}
}
const mapStateToProps = (state) => {
  return {
    ...state
  };
};
export default connect(mapStateToProps)(TestContainer);
