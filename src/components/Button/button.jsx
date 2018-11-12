import React, { Component } from 'react';
import {connect} from "react-redux";
import {buttonClick} from "../../actions/loginAction";

class Button extends Component {

  handleClick = () => {
    this.props.showAlert();
  }

  render() { 
    return ( 
      <button onClick={this.handleClick}>{this.props.buttonText}</button>
     );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    buttonText: state.buttonText
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showAlert: () => {
      dispatch(buttonClick());
    }
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Button);