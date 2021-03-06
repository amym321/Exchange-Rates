import React from 'react';

// ********  code only up to section 27 here *********

class Signin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            signInEmail: '',
            signInPassword: ''
    }
}
    
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.id) {
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        })        
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <article className="br3 ba w-100 mw6 shadow-5 center bg-gray-100">
                <main className="pa4 ">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="text-xl font-semibold text-gray-800">Sign In</legend><br></br>
                            {/* <legend className="f1 fw6 ph0 mh0 ">Sign In</legend> */}
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-white w-100 black" 
                                    type="email" 
                                    name="email-address"  
                                    id="email-address"
                                    onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input  
                                    className="b pa2 input-reset ba bg-transparent hover-bg-white w-100 black" 
                                    type="password" 
                                    name="password"  
                                    id="password"
                                    onChange={this.onPasswordChange}
                                />
                            </div>
                        </fieldset>
                        <div >
                            <input 
                                onClick={this.onSubmitSignIn} 
                                className="b ph3 pv2 input-reset ba bg-transparent bg-transparent hover-bg-white grow pointer f6 dib" 
                                type="submit" 
                                value="Sign In"
                            />
                        </div>
                    </div>
                </main>
            </article>
        )
    }
}

export default Signin;