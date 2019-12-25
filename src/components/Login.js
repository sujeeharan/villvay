import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';


class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        if(event.target.name === "email"){
            this.setState({
                email: event.target.value
            });
        }
        else{
            this.setState({
                password: event.target.value
            });
        }
    }

    handleSubmit(e){
        e.preventDefault();
        console.log("Payload: ", JSON.stringify({
            "email":this.state.email,
            "password": this.state.password
        }))
        fetch("https://reqres.in/api/login",{
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "email":this.state.email,
                "password": this.state.password
            })})
            .then((result => {
                console.log(result)
                if(result.status == 200){
                    console.log(true)
                    this.props.loggedIn(true)
                }
                else {
                    console.log(result.status)
                    this.props.loggedIn(false)

                }
            }))
            
    }

    render() {
        const responseGoogle = (response) => {
            console.log(response)
          }

        return (
            <div name="Login" float="left">
                <h1>Login Form </h1>
                <form onSubmit={this.handleSubmit}>

                    <div>
                        Email <input type="text" name="email" onChange={this.handleChange} value={this.state.email} />
                        Password <input type="password" name="password" onChange={this.handleChange} value={this.state.password} />
                        <input type="submit" value="Login"/>
                    </div>
                </form>

                <GoogleLogin
                    clientId="29600442056-4h3fs550g99hv1th1boc6kfi2qsv4v43.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        );
    }
}

export default Login;
