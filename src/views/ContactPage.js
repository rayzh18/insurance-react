import React from 'react';

import support from '../assets/support.png';

const SupportPage = () => {
	return (
		<>
			<main className='contact'>
				<section>
					<h1>Kontakt</h1>
					<p className='header-text'>
						Pro rychlé vyřízení vašich dotazů využívejte online chat nebo
						volejte na uvedené číslo
					</p>
				</section>

				<section className='contact-content'>
					<div className='left'>
						<p>Telefon</p>
						<h3>740 730 720</h3>
						<p className='comment'>Pracovní dny: 8–18 hod</p>
					</div>
					<img src={support} alt='' />
					<div className='right'>
						<p>Email</p>
						<h3>ecestovko@info.cz</h3>
						<p className='comment'>Odpovíme do 24 hodin</p>
					</div>
				</section>

				<section className='billing'>
					<h2>Fakturační údaje</h2>
					<p>
						Hvězdova 1716/2b
						<br />
						140 78 Praha 4
					</p>
					<p>
						IČ: <span>49240901</span>
						<br />
						DIČ: <span>CZ699003154</span>
					</p>
					<p>
						Číslo účtu: <span>2200997481/2010</span>
					</p>
				</section>
			</main>
		</>
	);
};

export default SupportPage;
