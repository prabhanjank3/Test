import React, { Component } from "react";
import Navbar from "../../component/Boilerplate/Navbar";
import { connect } from "react-redux";
import LoginPageComponent from "../../component/Authentication/LoginPage";
import { AuthenticateUser } from "../../Utilities/ApiRequests";
import NavbarContainer from "../Navbar/Navbar";
import { Redirect } from "react-router-dom";
class LoginPage extends Component {
  handleSubmit = (values) => {
    //console.log(values);
    AuthenticateUser(values).then((resp) => {
      console.log(resp.data);

      if (resp.data.status === 200) {
        this.props.setAuthAction("user_log_in", resp.data.userData);
      } else {
        alert(resp.data.msg);
      }
    });
  };
  render() {
    return (
      <div>
        <section className="nav-section">
          <NavbarContainer />
        </section>
        {this.props.isAuthenticated === false ? (
          <LoginPageComponent handleSubmit={this.handleSubmit} />
        ) : (
          <Redirect to="/" />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setAuthAction: (actionType, obj) => {
      dispatch({ type: actionType, payLoad: obj });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
