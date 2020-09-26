import React from 'react';


// let countryD = 'USD' 
// let urlCountry4 = ['https://openexchangerates.org/api/currencies.json']

const country4 = Promise.all([`https://openexchangerates.org/api/currencies.json`].map(url =>
    fetch(url).then(country4 => country4.json())
))
  .then(array => {
    console.log('4', array[0])      
  })
  .catch(err => console.log('ughhhh fix it!', err));


class CurrencyName extends React.Component {
    constructor() {
        super();
        this.state = initialState;
      }

    loadCountry1 = (data) => {
    this.setState({country: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
    }})
    }
    
      
}


export default CurrencyName;