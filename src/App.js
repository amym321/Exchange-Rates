import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import CurrencyForm from './components/CurrencyForm/CurrencyForm';
// import CurrencyName from './components/ExchangeRate/ExchangeRate';
// import ExchangeRate from './components/ExchangeRate/ExchangeRate';
// import CountryData from './components/CountryData/CountryData';
import AOS from 'aos';
import Background from './images/goldcurrency1.jpg';
// import GoldEuro from './images/goldcurrency2.jpg';
// import GoldYen from './images/goldcurrency4.png';
// import MoneyTree from './images/moneytree.png';
import Rates from './images/rates2.jpg';
import Mockup from './images/mockup3.png';
import FlagA from './images/flagUS.jpg';
import FlagB from './images/flagFrance.jpg';
import Money from './images/papercurrency1.mp4';



// from face finder app.js
const initialState = {
	input: '',
	imageUrl: '',
	box: {},
    // route: 'signin',
    route: 'signin',
	isSignedIn: false,
	user: {
		id: '',
		name: '',
		email: '',
		entries: 0,
		joined: ''
	}
}


// export default function Landing() {
class Landing extends Component {
	constructor() {
		super();
		this.state = initialState;
	}

	loadUser = (data) => {
		this.setState({user: {
			id: data.id,
			name: data.name,
			email: data.email,
			entries: data.entries,
			joined: data.joined
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
        const { isSignedIn, route } = this.state;
        return (
      
        <div>
        
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
                                <img className="mt-2 mb-4 text-gray-600 rounded-lg" src={Rates} alt="image of project"></img>
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
                                <p className="mt-2 mb-4 text-gray-600">The currency calcultor will give you exact amount.
                                Rates are updated hourly.</p>
                                <img className="mt-2 mb-4 text-gray-600" src={Mockup} alt="image of project"></img>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="relative pt-32 pb-32 flex content-center items-center justify-center mt-24">
                        <div className="absolute w-full h-full bg-center bg-cover">
                            <video fluid={false} width={"100%"} height={"100%"} overflow-hidden loop muted autoPlay
                                style={{objectFit: "cover"}}>
                                <source fluid={false}  src={Money} type="video/mp4" />
                            </video>
                        </div>
                    </div>

                </section>
                

                : <section className=" bg-gray-300 -mt-24">

                    <div className="container mx-auto px-4">
                                                {/* <currencyForm />
                                                <CurrencyName />
                                                <ExchangeRate />
                                                <countryData /> */}

                        <div className="flex flex-wrap items-center mt-6">
                            <div className="w-full md:w-6/12 px-4  mr-auto ml-auto" data-aos="fade-up" data-aos-delay="1400">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="mt-2 mb-4 text-gray-600">
                                            <CurrencyForm />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        <div className="flex flex-wrap items-center mt-32">

                            <div className="w-full md:w-8/12 px-4 mr-auto ml-auto" data-aos="zoom-in-right" data-aos-delay="1200">
                                {/* <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                                <i className="fas fa-user-friends text-xl"></i>
                                </div> */}
                                <h3 className="text-3xl mb-2 font-semibold leading-normal text-center">
                                Your Currency Conversion                                
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                "Amount In" "from currency" from "CountryName A" equals "Amount out" "To currency"
                                from "CountryName B". 
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                                "CountryName A" uses "from currency" as currency and speaks "languageA". 
                                "CountryName A" is located in "subregionA" of "regionA" and has a population of "populationA".
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                                "CountryName B" uses "from currency" as currency and speaks "languageB". 
                                "CountryName B" is located in "subregionB" of "regionB" and has a population of "populationB"
                                </p>
                                {/* <a
                                href=""
                                className="font-bold text-gray-800 mt-8"
                                >
                                Check this out!
                                </a> */}
                            </div>

                            <div className="flex flex-wrap items-center mt-32">

                                <div className="w-full md:w-4/12 px-4 mr-auto ml-auto" data-aos="flip-left" data-aos-delay="1400">
                                    <div className="relative flex flex-col min-w-0 break-words bg-gray-200 w-full mb-6 shadow-lg rounded-lg">
                                        <img
                                            alt="..."
                                            src={FlagA}
                                            className="w-full align-middle rounded-t-lg"
                                        />
                                        <blockquote className="relative p-2 mb-2 text-center">
                                            {/* <svg
                                            preserveAspectRatio="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 583 95"
                                            className="absolute left-0 w-full block"
                                            style={{
                                                height: "95px",
                                                top: "-94px"
                                            }}
                                            >
                                            <polygon
                                                points="-30,95 583,95 583,65"
                                                className="text-pink-600 fill-current"
                                            ></polygon>
                                            </svg> */}
                                            <h4 className="text-xl font-bold text-black">
                                            Country A
                                            </h4>
                                            {/* <p className="text-md font-light mt-2 text-white">
                                            The Arctic Ocean freezes every winter and much of the
                                            sea-ice then thaws every summer, and that process will
                                            continue whatever happens.
                                            </p> */}
                                        </blockquote>
                                    </div>
                                </div>
                        
                                <div className="w-full md:w-4/12 px-4 mr-auto ml-auto" data-aos="flip-right" data-aos-delay="1600">
                                    <div className="relative flex flex-col min-w-0 break-words bg-gray-200 w-full mb-6 shadow-lg rounded-lg">
                                        <img
                                            alt="..."
                                            src={FlagB}
                                            className="w-full align-middle rounded-t-lg"
                                        />
                                        <blockquote className="relative p-2 mb-2 text-center">
                                            {/* <svg
                                            preserveAspectRatio="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 583 95"
                                            className="absolute left-0 w-full block"
                                            style={{
                                                height: "95px",
                                                top: "-94px"
                                            }}
                                            >
                                            <polygon
                                                points="-30,95 583,95 583,65"
                                                className="text-pink-600 fill-current"
                                            ></polygon>
                                            </svg> */}
                                            <h4 className="text-xl font-bold text-black">
                                            Country B
                                            </h4>
                                            {/* <p className="text-md font-light mt-2 text-white">
                                            The Arctic Ocean freezes every winter and much of the
                                            sea-ice then thaws every summer, and that process will
                                            continue whatever happens.
                                            </p> */}
                                        </blockquote>
                                    </div>
                                </div>
                           
                            </div>                           
                        </div>



                    </div> 

                    <div className="relative pt-32 pb-32 flex content-center items-center justify-center mt-32">
                        <div className="absolute w-full h-full bg-center bg-cover">
                            <video fluid={false} width={"100%"} height={"100%"} overflow-hidden loop muted autoPlay
                                style={{objectFit: "cover"}}>
                                <source fluid={false}  src={Money} type="video/mp4" />
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

export default Landing;


// // ********  code only up to section 27 here got basics owrking with some marked out *********
	
// // inital code from create react appto test file
// // class App extends Component {
// //   render() {
// //     return (
// //       <div className="App">

// //       </div>
// //     );
// //   }
// // }

// const initialState = {
// 	input: '',
// 	imageUrl: '',
// 	box: {},
// 	route: 'signin',
// 	isSignedIn: false,
// 	user: {
// 		id: '',
// 		name: '',
// 		email: '',
// 		entries: 0,
// 		joined: ''
// 	}
// }

// class App extends Component {
// 	constructor() {
// 		super();
// 		this.state = initialState;
// 	}

// 	loadUser = (data) => {
// 		this.setState({user: {
// 			id: data.id,
// 			name: data.name,
// 			email: data.email,
// 			entries: data.entries,
// 			joined: data.joined
// 		}})
// 	}

//     // calculateFaceLocation = (data) => {
//     //     const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
//     //     const image = document.getElementById('inputimage');
//     //     const width = Number(image.width);
//     //     const height = Number(image.height);
//     //     return {
//     //       leftCol: clarifaiFace.left_col * width,
//     //       topRow: clarifaiFace.top_row * height,
//     //       rightCol: width - (clarifaiFace.right_col * width),
//     //       bottomRow: height - (clarifaiFace.bottom_row * height)
//     //     }
//     //   }
      
//     //   displayFaceBox = (box) => {
//     //     this.setState({box: box});
//     //   }

      
// 	onInputChange = (event) => {
// 		this.setState({input: event.target.value});
// 	}

//     // onButtonSubmit = () => {
//     //     this.setState({imageUrl: this.state.input});
//     //     app.models
//     //       .predict(
//     //         Clarifai.FACE_DETECT_MODEL,
//     //         this.state.input)
//     //       .then(response => {
//     //         if (response) {
//     //           fetch('http://localhost:3000/image', {
//     //             method: 'put',
//     //             headers: {'Content-Type': 'application/json'},
//     //             body: JSON.stringify({
//     //               id: this.state.user.id
//     //             })
//     //           })
//     //             .then(response => response.json())
//     //             .then(count => {
//     //               this.setState(Object.assign(this.state.user, { entries: count}))
//     //             })
//     //             .catch(console.log)
    
//     //         }
//     //         this.displayFaceBox(this.calculateFaceLocation(response))
//     //       })
//     //       .catch(err => console.log(err));
//     //   }

      
// 	onRouteChange = (route) => {
// 		if (route === 'signout') {
// 			this.setState(initialState)
// 		} else if (route === 'home') {
// 			this.setState({isSignedIn: true})
// 		}
// 		this.setState({route: route});
// 	}

// 	render() {
// 		const { isSignedIn, imageUrl, route } = this.state;
// 		return (
// 			<div className="App">
// 				<Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
// 				{ route === 'home'
// 					? <div>
// 							<CurrencyName />
//                             <ExchangeRate />
// 						</div>
// 					: (
// 						 route === 'signin'
// 						 ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
// 						 : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
// 						)
// 				}
// 			</div>
// 		);
// 	}
// }

// export default App;