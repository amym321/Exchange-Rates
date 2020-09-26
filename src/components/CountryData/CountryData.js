import React from 'react';

let countryNameA = "france"


const country1 = Promise.all([`https://restcountries.eu/rest/v2/name/${countryNameA}?fullText=true`].map(url => fetch(url).then(country1 => country1.json()) ))
  .then(array => {
    console.log('1 restcountries.eu for flags etc. aruba hard coded')
    console.log('1', array[0])
  })
  .catch(err => console.log('ughhhh fix it!', err));


class CurrencyData extends React.Component {
    
}


export default CurrencyData;