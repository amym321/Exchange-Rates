import React from 'react';
import Dropdown from 'react-dropdown';
// import CurrencyOptions from './CurrencyOptions3';

// function CurrencyForm(props) {  }       do this instead? 
class CurrencyForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currencyFrom: '',
            currencyTo: '',
            currency: '',
            amountIn: 0,
            amountOut: 0,
            selected: ''
        }
        this._onSelect = this._onSelect.bind(this)
    }

    _onSelect (option) {
        console.log('option.label ', option.label)
        console.log('option.value ', option.value)
        // this.setState({currencyFrom: option})
        this.setState({selected: option.label})
        this.setState({currencyFrom: option.value})
        console.log('11 selected ', this.selected)
        console.log('12', this.props.selected)
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
        const { amountIn, selected, currencyFrom, currencyTo, amountOut, currency, onInputChange2 } = this.props;
        const options = [
            { value: 'X', label: '~Please select currency~' },
            { value: 'USD', label: 'United States Dollar' },
            { value: 'EUR', label: 'Euro (used in France)' },
            // { value: 'EUR', label: 'Euro (used in Germany)' },
            // { value: 'EUR', label: 'Euro (used in Austria)' },
            { value: 'AUD', label: 'Australian Dollar' },
            { value: 'MXN', label: 'Mexican Peso' },
            { value: 'BLG', label: 'Bulgarian Lev' },
            { value: 'BRL', label: 'Brazilian Real' },
            { value: 'CAD', label: 'Canadian Dollar' },
            { value: 'GBP', label: 'British Pound Sterling' },
            { value: 'AED', label: 'United Arab Emirates Dirham' },
            { value: 'CHF', label: 'Swiss Franc' },
            { value: 'CNY', label: 'Chinese Yuan' },
            { value: 'CLP', label: 'Chilean Peso' }
        ]
        // const defaultOption = options[0];
        const defaultOption = this.state.selected
        const placeHolderValue = typeof 
            this.state.selected === 'string' 
            ? this.state.selected 
            : this.state.selected.label &&
              this.state.currencyFrom.value
        const arrowClosed = (
            <span className="arrow-closed" />
          )
        const arrowOpen = (
            <span className="arrow-open" />
        )

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
                                    {console.log('4','<input>', 'amountIn =', amountIn)}
                            </div>   
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Initial Currency</label>
                                {/* <GetOptions optionChoices={optionChoices}/> */}
                                <Dropdown 
                                    className="pa2 input-reset ba bg-transparent hover-bg-white w-100 black" 
                                    arrowClosed={arrowClosed}
                                    arrowOpen={arrowOpen}
                                    options={options} 
                                    onChange={this._onSelect} 
                                    value={defaultOption} 
                                    placeholder="Select an option"                                                
                                />
                                {console.log('8','Dropdown()', 'options =', options)}
                                {console.log('14', selected)}
                                {/* {console.log('9','Dropdown()', 'value =', value)} */}
                                {/* {console.log('10','Dropdown()', 'selected param =', defaultOption)} */}
                            </div>
                            {/* <div className="mt3">
                                <label className="db fw6 lh-copy f6" 
                                    htmlFor="email-address">Initial Currency</label>
                                <CurrencyOptions  
                                    currencyFrom={currencyFrom}
                                    onInputChange2={this.onInputChange2}  />
                                get props of currency and id from CurrencyOptions as 1st currency
                                probably want to get passed back a generic currency and then move that to CurrencyOut
                                {console.log('5','CurrencyOptions ()', 'currency =', currency)}
                            </div> */}
                            {/* <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Converted To Currency</label>
                                <CurrencyOptions  currencyTo={currencyTo}/>
                                get props of currency and id from CurrencyOptions as 2nd currency
                                probably want to get passed back a generic currency and then move that to CurrencyOut
                                {console.log('6','CurrencyOptions ()', 'currencyTo =', currencyTo)}
                                
                                {console.log('?','CurrencyOptions ()', 'amountOut =', amountOut)}                                
                            </div> */}
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