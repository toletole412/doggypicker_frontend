import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {login} from '../actions/login'
import LoginForm from '../components/LoginForm'
import {Redirect} from 'react-router-dom'

class LoginPage extends PureComponent {
	handleSubmit = (data) => {
		this.props.login(data.name, data.password)
	}

	render() {
		if (this.props.currentUser) return (
			<Redirect to="/" />
		)

		return (
        <div id="outer-container">
          <ul class="cb-slideshow">
            <h1>Login</h1>
            <LoginForm onSubmit={this.handleSubmit} />
          </ul>
        </div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		currentUser: state.currentUser
	}
}

export default connect(mapStateToProps, {login})(LoginPage)
