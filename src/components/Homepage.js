import React, { Component } from 'react';

class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userDetails: []
        }

        this.logout = this.logout.bind(this)
    }

    componentWillMount() {
        fetch("https://reqres.in/api/users")
            .then(result => result.json())
            .then(
                (result) => {
                    this.setState({
                        userDetails: result.data,
                    });
                    console.log(result)
                },
                (error) => {
                    console.log(error)
                }
            )

    }

    logout(){
        this.props.loggedIn(false)
    }

    render() {
        return (
            <div className="Homepage" align="center">
                <input type="button" value="logout" onClick={this.logout}/>
                <table>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Avatar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.userDetails.map((user) => (
                            <tr key={user.id}>
                                <td>{user.email}</td>
                                <td>{user.first_name} </td>
                                <td>{user.last_name}</td>
                                <td><img src={user.avatar} alt={user.first_name} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )

    }
}

export default Homepage;
