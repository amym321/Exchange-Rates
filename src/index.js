import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';



ReactDOM.render(
    <React.StrictMode>
        <App />,
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// from Tailwind indexedDB.js
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// fortawesome will need npm
// import "@fortawesome/fontawesome-free/css/all.min.css";

// import Landing from "views/Lading.js";

// ReactDOM.render(
//   <BrowserRouter>
//     <Switch>
//       <Route path="/landing" component={Landing} />
//       <Redirect from="/" to="/landing" />
//     </Switch>
//   </BrowserRouter>,
//   document.getElementById("root")
// );