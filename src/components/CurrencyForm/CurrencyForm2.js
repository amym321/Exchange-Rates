import React from 'react';
import { options } from './CurrencyOptions';
import Dropdown from 'react-dropdown';


class CurrencyForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currencyFrom: '',
            currencyTo: '',
            currency: '',
            amountIn: 0,
            amountOut: 0,
            options: options,
            selected: ''
        }
        this._onSelectFrom = this._onSelectFrom.bind(this)
        this._onSelectTo = this._onSelectTo.bind(this)
    }

    _onSelectFrom (option) {
        // console.log('option.label =', option.label)
        // console.log('option.value =', option.value)
        // this.setState({selected: option.label})
        this.setState({currencyFrom: option.value})
    }

    _onSelectTo (option) {
        // console.log('option.label =', option.label)
        // console.log('option.value =', option.value)
        // this.setState({selected: option.label})
        this.setState({currencyTo: option.value})
    }

    // onPasswordChange = (event) => {
    //     this.setState({currencyTo: event.target.value})
    // }
        
    onAmountChange = (event) => {
        this.setState({amountIn: event.target.value})
    }

    onInputChange2 = (event) => {
		this.setState({currency: event.target.value});
    }

    onSubmitCurrencyForm = (currencyFrom) => {
        this.setState({currencyFrom: currencyFrom});
        console.log('1','onSubmitCurrencyForm ()');
        console.log('2', currencyFrom.target.value);
        console.log('3', currencyFrom);
    }


    // onSubmitCurrencyForm = (event) => {
    //     this.setState({currencyFrom: event.target.value});
    //     console.log('onSubmitCurrencyForm ()');
    //     console.log(event);
    // }

    // onSubmitSignIn = () => {
    //     fetch('http://localhost:3000/signin', {
    //         method: 'post',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({
    //             email: this.state.currencyFrom,
    //             password: this.state.currencyTo,
    //             amount: this.state.amount
    //         })
    //     })
    //     .then(response => response.json())
    //     .then(user => {
    //         if (user.id) {
    //             this.props.loadUser(user);
    //             this.props.onRouteChange('home');
    //         }
    //     })
    // }

    render() {
        const { amountIn, selected, currencyFrom, currencyTo, countryA, countryB, amountOut, currency, onInputChange2 } = this.props;
        // const defaultOption = options[0];
        const { options } = this.state
        const defaultOption = this.state.selected
        const placeHolderValue = typeof  
        this.state.selected === 'string' 
            ? this.state.selected       && this.state.currencyFrom       && this.state.countryA
            : this.state.selected.label && this.state.currencyFrom.value && this.state.countryA.label 
        const arrowClosed = (
            <span className="arrow-closed" />
        )
        const arrowOpen = (
            <span className="arrow-open" />
        )

        return (
            <article className="br3 ba w-100 mw6 shadow-5 center bg-gray-100">
                <main className="pa2 pa4-l">
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
                                    className="pa2 input-reset ba bg-transparent hover-bg-white w-100 w-40-ns black" 
                                    type="number" 
                                    name="amount"  
                                    id="amount"
                                    onChange={this.onAmountChange}
                                    />
                                    {console.log('4','<input>', 'amountIn =', amountIn)}
                            </div>   
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6">Initial Currency</label>
                                <Dropdown 
                                    className="pa2 input-reset ba bg-transparent hover-bg-white w-100 black" 
                                    arrowClosed={arrowClosed}
                                    arrowOpen={arrowOpen}
                                    options={options} 
                                    onChange={this._onSelectFrom} 
                                    value={defaultOption} 
                                    placeholder="~Please select currency~"                                                
                                />

                                {console.log('8','Dropdown()', 'options =', options)}
                                {console.log('16 this.state.selected =', this.state.selected)}
                                {console.log('17 this.state.currencyFrom =', this.state.currencyFrom)}
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" >Converted To Currency</label>
                                <Dropdown 
                                    className="pa2 input-reset ba bg-transparent hover-bg-white w-100 black" 
                                    arrowClosed={arrowClosed}
                                    arrowOpen={arrowOpen}
                                    options={options} 
                                    onChange={this._onSelectTo} 
                                    value={defaultOption} 
                                    placeholder="~Please select currency~"                                                
                                />
                                {console.log('20 this.state.currencyTo =', this.state.currencyTo)}
                            </div>
                        </fieldset>
                        <div className="text-center">
                            <input 
                                onClick={this.onSubmitCurrencyForm} 
                                className="b ph3 pv2 input-reset ba bg-transparent bg-transparent hover-bg-white grow pointer f6 dib" 
                                type="submit" 
                                // value="Submit"
                            />
                        </div>
                        
                    </div>
                </main>                
            </article>            
        )
    }
}

export default CurrencyForm;