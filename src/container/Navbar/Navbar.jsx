import React, { Component } from "react";
import NavbarComponent from "../../component/Boilerplate/Navbar";
import { connect } from "react-redux";
class Navbar extends Component {
  render() {
    return <NavbarComponent auth_info={this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
    firstname: state.current_usr_info.firstname,
    lastname: state.current_usr_info.lastname
  };
};
export default connect(mapStateToProps)(Navbar);
