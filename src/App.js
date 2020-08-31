import React from 'react';
import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import icon1 from './images/icon1.PNG'
import icon2 from './images/icon2.PNG'
import icon3 from './images/icon3.PNG'
import Brands from './components/Brands'
import Footer from './components/Footer'
import './CSS/main.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <span className="body-flex">
        <Body Icon={icon1} Title="Beautiful themes that are responsive and customizable" Paragraph="No design skills needed. You have complete control over the look and feel of your website, from its layout, to content and colors."/>
        <Body Icon={icon2} Title="Pricing as low as $29/month" Paragraph="Whether you sell online, on social media, in store, or out of the trunk of your car, Shopify has you covered. Start selling anywhere for just $29/month."/>
        <Body Icon={icon3} Title="Trusted by over 1,000,000 businesses worldwide" Paragraph="Shopify handles everything from marketing and payments, to secure checkout and shipping "/>
      </span>
        <Brands />
        <Footer />
    </div>
  );
}

export default App;
