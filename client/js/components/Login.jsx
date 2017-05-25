import React from 'react';
import { GoogleLogin } from 'react-google-login-component';

/**
 * Class to hold the LoginComponent component.
 * @extends React.Component
 */
class LoginComponent extends React.Component {
  /**
    * Set the Initial conditions for showing the News Header
    * @param {object} props - The properties of the ArticlesComponent Class
    */
  constructor(props, context) {
    super(props, context);
  }

  responseGoogle(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;

  }

  render() {
    return (
      <div id="loginMain">
        <GoogleLogin id="login" socialId="231069495552-d80eprkd635l984glf0eqm7q38bnevmm.apps.googleusercontent.com"
          class="google-login"
          scope="profile"
          responseHandler={this.responseGoogle}
          buttonText="Login With Google" />
      </div>
    );
  }

}

export default LoginComponent;