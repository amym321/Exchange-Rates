import React from 'react';

// ********  code only up to section 27 here *********

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p 
                    onClick={() => onRouteChange('signout')}  
                    className='f3 link dim b underline pa3 pointer'>Sign Out
                </p>
            </nav>
        );
    } else {
        return (
            <nav>
            {/* <nav style={{display: 'flex', justifyContent: 'flex-end'}}> */}
                <p 
                    onClick={() => onRouteChange('signin')}  
                    className='font-semibold mx-1 text-white p-3 text-center inline-flex items-center justify-center w-35 h-12 mb-5 shadow-lg rounded-full bg-blue-400 pointer'>
                    {/* className='f3 link dim white b underline pa3 pointer'> */}
                    Sign In
                </p>
                <p 
                    onClick={() => onRouteChange('register')}  
                    className='font-semibold mx-1 text-white p-3 text-center inline-flex items-center justify-center w-35 h-12 mb-5 shadow-lg rounded-full bg-blue-400 pointer'>
                    {/* className='f3 link dim white b underline pa3 pointer'> */}
                    Register
                </p>
            </nav>
        )
    }
}

export default Navigation;


{/* <div className="mx-1 text-white p-3 text-center inline-flex items-center justify-center w-35 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
<p>Sign In</p>
</div> */}
