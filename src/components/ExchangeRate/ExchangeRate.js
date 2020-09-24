import React from 'react';
import AOS from 'aos';
import Background from '../../images/goldcurrency1.jpg';
// import GoldEuro from './images/goldcurrency2.jpg';
// import GoldYen from './images/goldcurrency4.png';
// import MoneyTree from './images/moneytree.png';
import Rates from '../../images/rates2.jpg';
import Mockup from '../../images/mockup3.png';

class ExchangeRate extends React.Component {

    componentDidMount() {
        AOS.init({
            delay: 200, // values from 0 to 3000, with step 50ms
            duration: 1500, // values from 0 to 3000, with step 50ms
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
        });
    }


    render() {
        // const { isSignedIn, route } = this.state;
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
                        <div className="pr-12">
                        <h1 className="text-white font-semibold text-5xl" data-aos="fade-up">
                            X-Change
                        </h1>
                        {/* <p className="mt-4 text-lg text-white " data-aos="fade-right" data-aos-delay="1000">
                            Currency exchange rates provided in an accurate and timely display. 
                            Convert your currency into a choice of more than 50 currencies.                             
                        </p> */}
                        </div>
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

            <section className="pb-20 bg-gray-300 -mt-24">            
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
                            Free conversion of your currency into a foreign currency for your business or personal needs.                             
                        </p>
                        <img className="mt-2 mb-4 text-gray-600 rounded-lg" src={Rates} alt="image of project"></img>
                    </div>
                    </div>
                </div>
                
                <div className="w-full md:w-4/12 px-4 text-center" data-aos="fade-up" data-aos-delay="1400">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                        {/* <div className="mx-1 text-white p-3 text-center inline-flex items-center justify-center w-35 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                            <p>Sign In</p>
                        </div>
                        <div className="mx-1 text-white p-3 text-center inline-flex items-center justify-center w-35 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                            <p>Register</p>
                        </div>
                        <h6 className="text-xl font-semibold">
                        Signin (or Register)
                        </h6>
                        <p className="mt-2 mb-4 text-gray-600">
                        form here
                        </p> */}
                        {/* <div className="mt-2 mb-4 text-gray-600">
                            <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                            { route === 'home'
                                ? <div>
                                        <CurrencyName />
                                        <ExchangeRate />
                                    </div>
                                : (
                                    route === 'signin'
                                    ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>                                    
                                    : <ExchangeRate loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                                    )
                            }
                        </div> */}

                        {/* : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/> */}

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
                        <p className="mt-2 mb-4 text-gray-600">Rates are updated hourly.</p>
                        <img className="mt-2 mb-4 text-gray-600" src={Mockup} alt="image of project"></img>
                    </div>
                    </div>
                </div>
                </div>


                {/* <div className="flex flex-wrap items-center mt-32"> */}
                {/* <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                    <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                    <i className="fas fa-user-friends text-xl"></i>
                    </div>
                    <h3 className="text-3xl mb-2 font-semibold leading-normal">
                    Working with us is a pleasure
                    </h3>
                    <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                    Don't let your uses guess by attaching tooltips and popoves
                    to any element. Just make sure you enable them first via
                    JavaScript.
                    </p>
                    <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                    The kit comes with three pre-built pages to help you get
                    started faster. You can change the text and images and
                    you're good to go. Just make sure you enable them first via
                    JavaScript.
                    </p>
                    <a
                    href=""
                    className="font-bold text-gray-800 mt-8"
                    >
                    Check this out!
                    </a>
                </div> */}

                {/* <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                    <img
                        alt="..."
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                        className="w-full align-middle rounded-t-lg"
                    />
                    <blockquote className="relative p-8 mb-4">
                        <svg
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
                        </svg>
                        <h4 className="text-xl font-bold text-white">
                        Top Notch Services
                        </h4>
                        <p className="text-md font-light mt-2 text-white">
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever happens.
                        </p>
                    </blockquote>
                    </div>
                </div> */}

                {/* </div> */}
            </div>
            </section>
            </main>
        </div>
    );
    }
}


export default ExchangeRate;