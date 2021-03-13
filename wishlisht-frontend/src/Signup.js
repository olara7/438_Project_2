import React from "react";
import axios from "axios";

axios.defaults.headers.post['Content-Type'] = "application/json"

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            firstName: '',
            lastName: '',
            userId: '',
            user: []
        };

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
        handleChangeUsername(event) {
            this.setState({username: event.target.value})
        }
        handleChangePassword(event) {
            this.setState({password: event.target.value})
        }
        handleChangeEmail(event) {
            this.setState({email: event.target.value})
        }
        handleChangeFirstName(event) {
            this.setState({firstName: event.target.value})
        }
        handleChangeLastName(event) {
            this.setState({lastName: event.target.value})
        }
        async handleSubmit(event) {
            event.preventDefault();

            const url = "/signup"
            let params = {
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                firstName: this.state.firstName,
                lastName: this.state.lastName
            }

            params = JSON.stringify(params)

            axios.post(url,params)
                .then(response => {

                    console.log(response)
                    this.setState({user: response.data})
                    this.verifyData();
                })
                .catch(error => {
                    console.log(error)
                })
        }

        render() {
            return (
                <div className="signup">
                    <div className="subSignup">
                        <h1> Register </h1>
                        <br/>
                        <form onSubmit={this.handleSubmit}>
                            <input type={"text"} placeholder={"username"} value={this.state.username} onChange={this.handleChangeUsername}/>
                            <br/> <br/>
                            <input type={"password"} placeholder={"password"} value={this.state.password} onChange={this.handleChangePassword}/>
                            <br/> <br/>
                            <input type={"email"} placeholder={"email"} value={this.state.email} onChange={this.handleChangeEmail}/>
                            <br/> <br/>
                            <input type={"text"} placeholder={"firstName"} value={this.state.firstName} onChange={this.handleChangeFirstName}/>
                            <br/> <br/>
                            <input type={"text"} placeholder={"lastName"} value={this.state.lastName} onChange={this.handleChangeLastName}/>
                            <br/> <br/>
                            <input type={"submit"} value="Submit"/>
                        </form>
                    </div>
                </div>
            );
        }
}

export default Signup;