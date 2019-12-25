import React, { Component } from 'react';
import UserApi from '../api/userApi';

class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userDetails: []
        }
    }

    componentWillMount() {
        // UserApi.getUserDetails()
        //     .then(data => {
        //         this.setState({
        //             userDetails: data
        //         })
        //     })

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


    render() {
        return (
            <div className="table" align="center">
                <table>
                    {this.state.userDetails.map((user) => (
                        <tr key={user.id}>
                            <td>{user.email}</td>
                            <td>{user.first_name} </td>
                            <td>{user.last_name}</td>
                            <td><img src={user.avatar}/></td>
                        </tr>
                    ))}
                </table>
            </div>
        )

    }
}

export default Homepage;
