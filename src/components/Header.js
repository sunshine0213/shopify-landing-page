import React from 'react'
import logo from '../images/shopify-logo.png'
import logo2 from '../images/shopify-logo2.PNG'
import "../CSS/main.scss"

export const Header = () => {
    return (
        <div className="wrapped-Header">
            <div className="Header">
                <div className="Header__Div1">
                    <img src={logo2} alt="logo" className="Header__Div1--logo"/>
                    <h2 className="Header__Div1--title">shopify</h2>
                </div>
                <div className="Header__Div2">
                    <h1 className="Header__Div2--title">Sell online with Shopify</h1>
                    <p className="Header__Div2--paragraph">Trusted by over 1,000,000 businesses worldwide</p>
                </div>
                <div className="Header__Div3">
                    <input type="search" className="Header__Div3--search" placeholder="Enter your email address"/>
                    <button className="Header__Div3--button">Start free trial</button>
                </div>
                <div className="Header__Div4">
                    <p className="Header__Div4--paragraph">Try&nbsp; Shopify&nbsp; free for 14 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify.</p>
                    <img className="Header__Div4--img" src="https://cdn.shopify.com/shopifycloud/brochure/assets/landers/short-lander/free-trial/default@mobile-2x-1e95e12dd1cec4201eecf6f4f4001317b06dcfb8cfc9b6001f46030940a49cc2.png" alt="pc picture" />
                </div>
            </div>
        </div>
        
    )
}


export default Header