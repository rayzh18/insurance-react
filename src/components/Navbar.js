import React from 'react';

import calculatorIcon from '../assets/calculator-icon.svg';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='navbar-brand'>
				<h2>
					<span>e</span>cestovka
				</h2>
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
	);
};

export default Navbar;
