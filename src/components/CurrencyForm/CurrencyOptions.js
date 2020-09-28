import React from 'react';


class CurrencyOptions extends React.Component {
    render() { 
        return (
            <select required
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
            </select>
        )
    }
}



export default CurrencyOptions;