import React, { Component } from 'react';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confirmpassword: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        if (event.target.name === "email") {
            this.setState({
                email: event.target.value
            });
        }
        else {
            this.setState({
                password: event.target.value
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("Payload: ",JSON.stringify({
            "email": this.state.email,
            "password": this.state.password
        }))
        fetch("https://reqres.in/api/register", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email": this.state.email,
                "password": this.state.password
            })
        })
            .then((result => {
                console.log(result)
            }))
    }

    render() {
        return (
            <div name="signup" >
            <h1>Sign up</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        Email:
                    </div>
                    <div>
                        <input name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div>
                        Password:
                    </div>
                    <div>
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div>
                        Confirm password:
                    </div>
                    <div>
                        <input name="confirmpassword" type="password" />
                    </div>
                    <div>
                        <input type="submit" value="signup" />
                    </div>
                </form>

            </div>
        )
    }
}

export default Signup;