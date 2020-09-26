import React from 'react';
import CurrencyOption from 'CurrencyOptions';

let InitialCurrency

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
            <article className="br3 ba w-100 mw6 shadow-5 center bg-gray-100">
                <main className="pa4 ">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="text-xl font-semibold text-center text-gray-800">
                            Enter Currency Information<br></br>
                        </legend><br></br>
                        <p className="text-center">Get your conversion from one currency 
                        to another as well as country information specific to the countries using the 
                        two currencies you selected.</p><br></br>
                        {/* <legend className="f1 fw6 ph0 mh0 ">Sign In</legend> */}
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6 " htmlFor="name">Amount</label>
                            <input required
                                className="pa2 input-reset ba bg-transparent hover-bg-white w-100-ns w-40-l black" 
                                type="number" 
                                name="amount"  
                                id="amount"
                                onChange = {this.onAmountChange}
                                />
                        </div>   
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Initial Currency</label>
                            <CurrencyOption/>
                            {/* <select required
                                className="pa2 input-reset ba bg-transparent hover-bg-white w-100 black" 
                                type="text" 
                                name="initialCurrency"  
                                id="initialCurrency"
                                onChange={this.onInitialCurrencyChange}
                                // value={InitialCurrency}
                            >
                                <option>~Please select currency~</option>
                                <option id="USD" id="United States of America">United States Dollar</option>
                                <option id="EUR" id="France">Euro (used in France)</option>
                                <option id="EUR" id="Austria">Euro (used in Austria)</option>
                                <option id="EUR" id="Germany">Euro (used in Germany)</option>
                                <option id="GBP" id="Britain">British Pound Sterling</option>
                                <option id="MXN" id="Mexico">Mexican Peso</option>
                                <option id="AED" id="United Arab Emirates">United Arab Emirates Dirham</option>
                            </select> */}
                            {/* <form action="/action_page.php" method="get">
                                <label for="browser">Choose your browser from the list:</label>
                                <input list="browsers" name="browser" id="browser">
                                <datalist id="browsers">
                                    <option value="Edge">
                                    <option value="Firefox">
                                </datalist>
                            </form> */}
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Converted To Currency</label>
                            <select  required
                                className="pa2 input-reset ba bg-transparent hover-bg-white w-100 black" 
                                type="text" 
                                name="convertedCurrency"  
                                id="convertedCurrency"
                                onChange={this.onConvertedCurrencyChange}
                                // value="Converted Currency"
                            >
                                <option>~Please select currency~</option>
                                <option id="USD" id="United States of America">United States Dollar</option>
                                <option id="EUR" id="France">Euro (used in France)</option>
                                <option id="EUR" id="Austria">Euro (used in Austria)</option>
                                <option id="EUR" id="Germany">Euro (used in Germany)</option>
                                <option id="GBP" id="Britain">British Pound Sterling</option>
                                <option id="MXN" id="Mexico">Mexican Peso</option>
                                <option id="AED" id="United Arab Emirates">United Arab Emirates Dirham</option>
                            </select>
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