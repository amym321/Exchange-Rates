import React from 'react';

class CurrencyForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currencyFrom: '',
            currencyTo: '',
            amount: 0
    }
}
    
    onEmailChange = (event) => {
        this.setState({currencyFrom: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({currencyTo: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.currencyFrom,
                password: this.state.currencyTo,
                amount: this.state.amount
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
            <article className="br3 ba w-100 mw6 shadow-5 center bg-near-white">
                <main className="pa4 ">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="text-xl font-semibold text-center text-gray-800">
                            Enter Currency Information
                        </legend><br></br>
                        {/* <legend className="f1 fw6 ph0 mh0 ">Sign In</legend> */}
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Amount</label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-white w-100 black" 
                                // className="pa2 input-reset ba bg-transparent white hover-bg-black white hover-white w-100" 
                                type="text" 
                                name="name"  
                                id="name"
                                onChange = {this.onNameChange}
                                />
                        </div>   
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Currency I Have</label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-white w-100 black" 
                                type="email" 
                                name="email-address"  
                                id="email-address"
                                onChange={this.onEmailChange}
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Currency I Want</label>
                            <input  
                                className="b pa2 input-reset ba bg-transparent hover-bg-white w-100 black" 
                                type="password" 
                                name="password"  
                                id="password"
                                onChange={this.onPasswordChange}
                            />
                        </div>
                            </fieldset>
                        <div className="text-center">
                            <input 
                                onClick={this.onSubmitSignIn} 
                                className="b ph3 pv2 input-reset ba bg-transparent bg-transparent hover-bg-white grow pointer f6 dib" 
                                type="submit" 
                                value="Submit"
                            />
                        </div>
                    </div>
                </main>
            </article>
        )
    }
}

export default CurrencyForm;