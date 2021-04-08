import React from 'react';
import { slide as Menu } from 'react-burger-menu'

import calculatorIcon from '../assets/calculator-icon.svg';

const Navbar = () => {
	console.log('hello');
	return (
		<>
			<nav className='navbar'>
				<div className='navbar-brand'>
					<a href='/'>
						<h2>
							<span>e</span>cestovka
						</h2>
					</a>
					<span className='line'></span>
					<h3>Výhodné cestovní pojištění jednoduše</h3>
				</div>
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
					<li>
						<a href='#'>Kontakt</a>
					</li>
					<li>
						<a href='#'>
							<button>
								Spočítat pojistku <img src={calculatorIcon} alt='' />
							</button>
						</a>
					</li>
				</ul>
			</nav>
			<Menu 
				width={ '90%' }
			>
				<a href='' className="menu-item" >Proč my</a>
				<a href='' className="menu-item" >Co kryje cestovní pojištění</a>
				<a href='' className="menu-item" >Co od nás dostanete navíc</a>
				<a href='' className="menu-item">Kontakt</a>
			</Menu>
		</>
	);
};

export default Navbar;
