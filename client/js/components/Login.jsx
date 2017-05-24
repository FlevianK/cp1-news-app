import React from 'react';
import { GoogleLogin } from 'react-google-login-component';

class LoginComponent extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    responseGoogle(googleUser) {
        var id_token = googleUser.getAuthResponse().id_token;
        // console.log({ accessToken: id_token });
        //anything else you want to do(save to localStorage)... 
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