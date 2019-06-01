import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
import keys from "../config/keys";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: keys.googleClientID,
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button onClick={this.onSignOutClick} className="button is-primary">
                  <strong>Sign Out</strong>
                </button>
              </div>
            </div>
          </div>
      );
    } else {
      return (
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button onClick={this.onSignInClick} className="button is-light">
                  Sign in
                </button>
              </div>
            </div>
          </div>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);

