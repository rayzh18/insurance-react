import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import { useHistory } from "react-router-dom";
import calculatorIcon from '../assets/calculator-icon.svg';

const Navbar = () => {
	let history = useHistory();
	return (
		<>
			<nav className='navbar'>
				<div className='navbar-brand'>
					<a onClick={() => history.push('/')}>
						<h2>
							<span>e</span>cestovko
						</h2>
					</a>
					<span className='line'></span>
					<h3>Výhodné cestovní pojištění jednoduše</h3>
				</div>
				<ul>
					<li>
						<a >Proč my</a>
					</li>
					<li>
						<a >Co kryje cestovní pojištění</a>
					</li>
					<li>
						<a >Co od nás dostanete navíc</a>
					</li>
					<li>
						<a onClick={() => history.push('/contact')}>Kontakt</a>
					</li>
					<li>
						<a >
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
				<a  className="menu-item" >Proč my</a>
				<a  className="menu-item" >Co kryje cestovní pojištění</a>
				<a  className="menu-item" >Co od nás dostanete navíc</a>
				<a onClick={() => history.push('/contact')} className="menu-item">Kontakt</a>
			</Menu>
		</>
	);
};

export default Navbar;
