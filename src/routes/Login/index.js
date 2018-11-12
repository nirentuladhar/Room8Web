// Login Container
import { connect } from "react-redux";
import Login from "./index.jsx"
import { loginUser } from "../../ducks/login";

const mapStateToProps = (state, props) => {
  return {
    // buttonText: state.buttonText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showAlert: () => {
      dispatch(loginUser());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
