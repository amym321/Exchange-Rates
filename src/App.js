import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import CurrencyForm from './components/CurrencyForm/CurrencyForm2';
// import CurrencyName from './components/ExchangeRate/ExchangeRate';
import ExchangeRate from './components/ExchangeRate/ExchangeRate';
import CountryData from './components/CountryData/CountryData';
import AOS from 'aos';
import Background from './images/goldcurrency1.jpg';
// import GoldEuro from './images/goldcurrency2.jpg';
// import GoldYen from './images/goldcurrency4.png';
// import MoneyTree from './images/moneytree.png';
import Rates from './images/rates2.jpg';
import Mockup from './images/mockup5b.png';
import FlagA from './images/flagUS.jpg';
import FlagB from './images/flagFrance.jpg';
import Money from './images/papercurrency1.mp4';

const initialState = {
	input: '',
    route: 'home',
    isSignedIn: false,
    amountIn: 0,
    amountOut: 0,
    currencyFrom: 'Euro',
    currencyTo: '',
    countryA: '',
    countryB: '',
    languageA: '',
    subregionA: '',
    subregionB: '',
    populationA: 0,
    populationB: 0,
	user: {
		id: '',
		name: '',
        email: ''
	}
}


// export default function Landing() {
class App extends Component {
	constructor() {
		super();
		this.state = initialState;
	}

	loadUser = (data) => {
		this.setState({user: {
			id: data.id,
			name: data.name,
			email: data.email
        }})
	}

    onInputChange = (event) => {
		this.setState({input: event.target.value});
    }
    
    onRouteChange = (route) => {
        if (route === 'signout') {
            this.setState(initialState)
        } else if (route === 'home') {
            this.setState({isSignedIn: true})
        }
        this.setState({route: route});
    }


    componentDidMount() {
        AOS.init({
            delay: 200, // values from 0 to 3000, with step 50ms
            duration: 1500, // values from 0 to 3000, with step 50ms
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
        });
    }


    render() {
        const { isSignedIn, route, amountIn, amountOut, currencyFrom, currencyTo, countryA, 
            countryB, languageA, languageB, regionA, regionB, subregionA, subregionB, capitalA,
            capitalB, populationA, populationB} = this.state;
        return (      
        <div>
            {/* {console.log('21 this.state.currencyFrom =', this.state.currencyFrom)}  
            {console.log('22 this.state.currencyFrom =', currencyFrom)}   */}
        
            {/* <Navbar transparent /> */}
            <main>         
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
                    style={{
                        minHeight: "75h"
                    }}>
                    <div className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                        backgroundImage: `url(${Background})`
                        }}>
                    <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                            
                                <h1 className="text-white font-semibold text-5xl" data-aos="fade-up">
                                    X-Change <br></br>
                                    Currency Converter
                                </h1>
                                {route === 'signin' || route === 'register'
                                ? <p className="mt-4 text-lg text-white " data-aos="fade-right" data-aos-delay="1000">
                                    Currency exchange rates provided in an accurate and timely display. 
                                    Convert your currency into a choice of more than 50 currencies.                             
                                </p>
                                : null
                                }
                            
                        </div>
        
                        </div>
                    </div>
                    <div
                    className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                    style={{ height: "70px", transform: "translateZ(0)" }}
                    >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0, 0, 2560, 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                        className="text-gray-300 fill-current"
                        points="0,0 0,100 1280,100"
                        ></polygon>
                        <polygon
                        className="text-gray-300 fill-current"
                        points="1280,100 2560,100 2560,0"
                        ></polygon>
                    </svg>
                    </div>
                </div>


 
                {/* <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} /> */}
        {/* ************* if route === 'signin' || route === 'register' ***************** */}
                {route === 'signin' || route === 'register'
                ? <section className=" bg-gray-300 -mt-24">             
                    <div className="container mx-auto px-4">
                
                        <div className="flex flex-wrap">
                        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center" data-aos="fade-right" data-aos-delay="1200">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                {/* <div className="text-white p-3 text-center inline-flex items-center justify-center w-25 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                <p>Free</p>
                                </div> */}
                                <h6 className="text-xl font-semibold">Free!</h6>
                                <p className="mt-2 mb-4 text-gray-600">
                                    Free conversion of one currency into another currency for your business or personal needs.                             
                                </p>
                                <img className="mt-2 mb-4 text-gray-600 rounded-lg" src={Rates} alt="project"></img>
                            </div>
                            </div>
                        </div>
                        
                        <div className="w-full md:w-4/12 px-4 text-center" data-aos="fade-up" data-aos-delay="1400">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <div className="mt-2 mb-4 text-gray-600">
                                    <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                                    { route === 'signin'
                                        ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                                        : (
                                            route === 'register'
                                            ? <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                                            : null
                                        )
                                    }
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center" data-aos="fade-left" data-aos-delay="1600">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                {/* <div className="text-white p-3 text-center inline-flex items-center justify-center w-50 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                                <p>Easy To Use</p>
                                </div> */}
                                <h6 className="text-xl font-semibold">
                                Easy To Use
                                </h6>
                                <p className="mt-2 mb-4 text-gray-600">Get information on the countries of the currencies as well.
                                Rates are updated hourly.</p>
                                <img className="mt-2 mb-4 text-gray-600" src={Mockup} alt="project"></img>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="relative pt-32 pb-32 flex content-center items-center justify-center mt-24">
                        <div className="absolute w-full h-full bg-center bg-cover">
                            <video width={"100%"} height={"100%"} overflow-hidden loop muted autoPlay
                                style={{objectFit: "cover"}}>
                                <source fluid="false"  src={Money} type="video/mp4" />
                            </video>
                        </div>
                    </div>

                </section>
                
                : <section className=" bg-gray-300 -mt-24">

                    <div className="container mx-auto px-4">
                    

                        <div className="flex flex-wrap items-center mt-6">
                            <div className="w-full md:w-5/12 px-4  mr-auto ml-auto" data-aos="fade-up" data-aos-delay="1000">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="mt-2 mb-4 text-gray-600">
{/* NEED TO PASS FUNCTIONS, NOT VARIABLES. SEE SIGNIN & REGISTER  */}
                                            <CurrencyForm 
                                                // onInputChange={this.onInputChange}  
                                                // onButtonSubmit={this.onButtonSubmit}
                                                amountIn={amountIn} 
                                                currencyFrom={currencyFrom} 
                                                currencyTo={currencyTo}
                                            />                                      
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {console.log('23 this.state.currencyFrom =', this.state.currencyFrom)}  
                        {console.log('24 currencyFrom =', currencyFrom)}     
                        {console.log('25 this.state.currencyTo =', this.state.currencyTo)}  
                        {console.log('26 currencyTo =', currencyTo)}              

                            
                        {currencyFrom !== '' 
                        
                        ? <div>
                            <div className="items-center "> 
                                {console.log('26 this.state.currencyFrom =', this.state.currencyFrom)}  
                                {console.log('27 currencyFrom =', currencyFrom)}     
                                {console.log('28 this.state.currencyTo =', this.state.currencyTo)}  
                                {console.log('29 currencyTo =', currencyTo)}    
        {/* NEED TO PASS FUNCTIONS, NOT VARIABLES. SEE SIGNIN & REGISTER  */}
                                <ExchangeRate 
                                    amountIn={amountIn} amountIn={amountIn}
                                    currencyFrom={currencyFrom} currencyTo={currencyTo}                                
                                />
                                {/* NEED TO PASS FUNCTIONS, NOT VARIABLES. SEE SIGNIN & REGISTER  */}
                                <CountryData
                                    currencyFrom={currencyFrom} currencyTo={currencyTo} countryA={countryA}
                                    countryB={countryB} languageA={languageA} languageB={languageB}
                                    capitalA={capitalA} capitalB={capitalB} regionA={regionA}
                                    regionB={regionB} subregionA={subregionA} subregionB={subregionB}
                                    populationA={populationA} populationB={populationB}
                                />
                                <div className=" items-center mt-24
                                    text-center  justify-center">
                                    <div className="w-full md:w-8/12 px-4 mr-auto ml-auto  text-center" data-aos="zoom-in-up" data-aos-delay="0">
                                        {/* <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                                        <i className="fas fa-user-friends text-xl"></i>
                                        </div> */}
                                        <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                        Your Currency Conversion                                
                                        </h3>
                                        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                            amountIn{amountIn} currencyFrom{currencyFrom} from countryA{countryA} equals  
                                            amountOut{amountOut} currencyTo{currencyTo} from countryB{countryB}. 
                                        </p>
                                    </div>
                                </div>  
                            </div>
                            <div className="flex flex-wrap items-center ">  
   
                            {/* was here */}
                                <div className="w-full md:w-5/12 lg:w-4/12 px-4 mr-auto ml-auto mt-24" data-aos="zoom-in-right">
                                    <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    United States of America{countryA}
                                    </h3>
                                    <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                        countryA{countryA} uses currencyFrom{currencyFrom} as currency and 
                                        speaks languageA{languageA}. 
                                    </p>
                                    <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                                        countryA{countryA} is located in subregionA{subregionA} within 
                                        regionA{regionA} and has a population of populationA{populationA}.
                                        The capital of countryA{countryA} is capitalA{capitalA}.
                                    </p>
                                </div>        
                                <div className="w-full md:w-5/12 lg:w-4/12 px-4 mr-auto ml-auto mt-24" data-aos="flip-left" data-aos-delay="1000">
                                    <div className="relative flex flex-col min-w-0 bg-gray-300 w-full shadow-lg rounded-lg">
                                        <img
                                            alt="Flag of first country"
                                            src={FlagA}
                                            className="w-full align-middle rounded-t-lg rounded-b-lg"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center">
                                <div className="w-full md:w-5/12 lg:w-4/12 px-4 mr-auto ml-auto mt-24" data-aos="flip-right" data-aos-delay="1000">
                                    <div className="relative flex flex-col min-w-0 bg-gray-300 w-full  shadow-lg rounded-lg">
                                        <img
                                            alt="Flag of second country"
                                            src={FlagB}
                                            className="w-full align-middle rounded-t-lg rounded-b-lg"
                                        />
                                    </div>
                                </div>
                                <div className="w-full md:w-5/12 lg:w-4/12 px-4 mr-auto ml-auto mt-24" data-aos="zoom-in-left" data-aos-delay="0">
                                    <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    France{capitalB}
                                    </h3>
                                    <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                        countryB{countryB} uses currencyFrom{currencyTo} as currency and 
                                        speaks languageB{languageB}. 
                                    </p>
                                    <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                                        countryB{countryB} is located in subregionB{subregionB} within 
                                        regionB{regionB} and has a population of populationB{populationB}.
                                        The capital of countryB{countryB} is capitalB{capitalB}.
                                    </p>
                                </div>    
                            </div>
                        </div>
                        : null
                        }


                    </div> 

                    <div className="relative pt-32 pb-32 flex content-center items-center justify-center mt-40">
                        <div className="absolute w-full h-full bg-center bg-cover">
                            <video  width={"100%"} height={"100%"} overflow-hidden="true" loop muted autoPlay
                                style={{objectFit: "cover"}}>
                                <source fluid="false"  src={Money} type="video/mp4" />
                            </video>
                        </div>
                    </div>

                </section>
                }
            </main>
        </div>
    );
    }
}

export default App;