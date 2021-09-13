 import React from 'react';
 import './home.css';
 import Header from '../header/index';
 import Footer from '../footer/index';
 import Body from '../body/index';

 
 function Home() {
     return <div className="home">
         <div>
             <Header />
         </div>
         <div>
             <Footer />
         </div>
         <div>
             <Body />
         </div>
          </div>;
     
 }
 
 export default Home;
 