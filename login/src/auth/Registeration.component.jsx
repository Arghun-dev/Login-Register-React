import React, {Component} from 'react'
import axios from 'axios'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            passwordConfirm: '',
            loginError: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }

    handleSubmit(e) {
        const { email, password, passwordConfirm } = this.state

        axios
            .post(
                "http://localhost:3001/sessions",
                {
                    user: {
                        email: email,
                        password: password,
                        passwordConfirm: passwordConfirm
                    }
                },
                { withCredentials: true }
            )
            .then(response => {
                if (response.data.logged_in) {
                    this.props.handleSuccessfulAuth(response.data)
                }
            })
            .catch(error => {
                console.log("login error", error)
            })
        e.preventDefault()
    }

    render() {
        const {email, password, passwordConfirm} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='email'
                        name='email'
                        placeholder='Email'
                        value={email}
                        onChange={this.handleChange}
                        required
                    />

                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={password}
                        onChange={this.handleChange}
                        required 
                    />

                    <input
                        type='password'
                        name='passwordConfirm'
                        placeholder='Confirm Password'
                        value={passwordConfirm}
                        onChange={this.handleChange}
                        required 
                    />

                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }
}