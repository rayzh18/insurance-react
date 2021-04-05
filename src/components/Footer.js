import React from 'react';

import facebookIcon from '../assets/facebook-icon.svg';
import instagramIcon from '../assets/instagram-icon.svg';
import twitterIcon from '../assets/twitter-icon.svg';
import calculatorIcon from '../assets/calculator-icon.svg';
import support from '../assets/support.png';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<section className='footer-header'>
					<a href='/'>
						<h2>ecestovko</h2>
					</a>
					<span className='line'></span>
					<h3>Výhodné cestovní pojištění jednoduše</h3>
				</section>

				<section className='footer-navigation'>
					<div>
						<h3>Menu</h3>
						<ul>
							<li>
								<a href='#'>Proč my</a>
							</li>
							<li>
								<a href='#'>Co kryje cestovní pojištění</a>
							</li>
							<li>
								<a href='#'>Co od nás dostanete navíc</a>
							</li>
						</ul>
					</div>

					<div>
						<h3>Rychlé odkazy</h3>
						<ul>
							<li>
								<a href='#'>Lorem ipsum</a>
							</li>
							<li>
								<a href='#'>Karlona</a>
							</li>
							<li>
								<a href='#'>Dis autnvea</a>
							</li>
							<li>
								<a href='#'>Rib andche</a>
							</li>
						</ul>
					</div>

					<div>
						<h3>Naše služby</h3>
						<ul>
							<li>
								<a href='#'>Lorem ipsum</a>
							</li>
							<li>
								<a href='#'>Karlona</a>
							</li>
							<li>
								<a href='#'>Dis autnvea</a>
							</li>
							<li>
								<a href='#'>Rib andche</a>
							</li>
						</ul>
					</div>

					<div>
						<h3>Sociální sítě</h3>
						<div className='footer-socials'>
							<button>
								<img src={facebookIcon} alt='' />
							</button>
							<button>
								<img src={instagramIcon} alt='' />
							</button>
							<button>
								<img src={twitterIcon} alt='' />
							</button>
						</div>
					</div>

					<div>
						<h3>Spočítat nejlepší pojistku</h3>
						<button className='footer-btn'>
							Spočítat pojistku <img src={calculatorIcon} alt='' />
						</button>
					</div>
				</section>

				<section className='footer-contact'>
					<img src={support} alt='' />
					<div>
						<p>Telefon</p>
						<h3>740 730 720</h3>
						<p className='comment'>Pracovní dny: 8–18 hod</p>
					</div>
					<div>
						<p>Email</p>
						<h3>ecestovko@info.cz</h3>
						<p className='comment'>Odpovíme do 24 hodin</p>
					</div>
				</section>

				<section className='footer-end'>
					<p>© 2020 Domatest. Všechna práva vyhrazena</p>
					<ul>
						<li>
							<a href='#'>GDPR</a>
						</li>
						<li>
							<a href='#'>Podmínky použití</a>
						</li>
						<li>
							<a href='#'>Všeobecné obchodní podmínky</a>
						</li>
						<li>
							<a href='#'>Ochrana spotřebitelů</a>
						</li>
					</ul>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
