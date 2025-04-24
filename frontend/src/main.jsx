import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { BrowserRouter } from 'react-router-dom'
// import { ClerkProvider } from "@clerk/clerk-react";

// const clerk_key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
// console.log(clerk_key);
// if(!clerk_key){  
//   throw new Error("Key was Not Found!");
// }
console.log("starting");

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <ClerkProvider publishableKey={clerk_key} afterSignOutUrl="/"> */}
      <App />
    {/* </ClerkProvider> */}
  </BrowserRouter>
)
