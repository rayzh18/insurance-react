
import React from 'react'

import facebookIcon from '../assets/facebook-icon.svg';
import instagramIcon from '../assets/instagram-icon.svg';
import twitterIcon from '../assets/twitter-icon.svg';

const EmailTemplate = () => {
    return (
        <div className="email-template">
            <div className="email-header">
                <h1><span>e</span>cestovko</h1>
                <h2>Výhodné cestovní pojištění jednoduše</h2>
            </div>
            <div className="email-body">
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempora, modi praesentium expedita tenetur corporis nisi sunt facilis nihil minus fuga, possimus ab laborum? Omnis ea aut cum quos harum!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsam aliquid labore explicabo corporis laudantium nihil eos. Nobis, praesentium perferendis magnam cupiditate excepturi ipsum consequuntur, ad ab, sed nam accusantium.</p>
            </div>
            <div className="email-template-contacts">
                <div className="etc-group">
                    <h2>Socialní síťe</h2>
                    <div className='footer-socials'>
							<button>
								<img src={facebookIcon} alt='' />
							</button>
							<button>
								<img src={instagramIcon} alt='' />
							</button>
							
						</div>
                </div>
                <div className="etc-group">
                    <h2>Web</h2>
                    <a href="#">www.ecestovko.cz</a> 
                </div>
                <div className="etc-group">
                    <h2>Email</h2>
                    <p>ecestovko@info.cz</p> 
                </div>
                <div className="etc-group">
                    <h2>Telefon</h2>
                    <p>740 730 720</p> 
                </div>
            </div>
            <div className="email-footer">
                <p>Pro odhlášení z odběru <a href="#">kliknitě zde</a></p>
            </div>
        </div>
    )
}

export default EmailTemplate
