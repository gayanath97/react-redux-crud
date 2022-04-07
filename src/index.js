import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux'
import {store,persistor} from './state/store'
import ReactDOM from "react-dom/client";
import { PersistGate } from 'redux-persist/integration/react';

// ReactDOM.render(
//    <Provider store={store}>
//     <App />
//     </Provider>
//   ,
//   document.getElementById('root')
// );
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
   <Provider store={store}>
       <PersistGate persistor={persistor}>
       <App />
       </PersistGate>
    
    </Provider>
);



