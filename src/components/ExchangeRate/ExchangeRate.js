import React from 'react';


// // let countryH = "USD"


class ExchangeRate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currencyFrom: '',
            currencyTo: '',
            amountIn: 0,
            amountOut: 0
    }
}

// const country8 = Promise.all([`https://v6.exchangerate-api.com/v6/8414ada5b719560e73850930/latest/${countryH}`].map(url =>
//     fetch(url).then(country8 => country8.json())
// ))
//   .then(array => {
//     console.log('8 exchangerate-api for exchange rates')
//     console.log('8', array[0])      
//   })
//   .catch(err => console.log('ughhhh fix it!', err));

    render() {


        return(
            <div><p></p></div>
        )
    }
}

export default ExchangeRate;