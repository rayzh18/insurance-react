import React from 'react';

import wrenchIcon from '../assets/wrench-icon.svg';
import coinsIcon from '../assets/coins-icon.svg';
import hospitalizationIcon from '../assets/hospitalization-icon.svg';
import truckIcon from '../assets/truck-icon.svg';
import hearthIcon from '../assets/hearth-icon.svg';
import luggageIcon from '../assets/luggage-icon.svg';
import carIcon from '../assets/car-icon.svg';
import pawIcon from '../assets/paw-icon.svg';

const LandingPage = () => {
	return (
		<main className='landing'>
			<section className='landing-main-section'>
				<div className='container landing-layout'>
					<div className='landing-left'>
						<h1>Cestovní pojištění</h1>
						<p className='landing-text'>
							Jednoduše a srozumitelně vám zajistíme cestovní pojištění
							s vlastnostmi, které jinde nedostanete
						</p>
						<ul>
							<li>Výběr z nabídky velkých a osvědčených pojišťoven</li>
							<li>
								Jednoduché a rychlé pojištění vaší cesty (soukromé i firemní)
							</li>
							<li>
								Rychlý a jednoduchý proces řešení případné pojistné události
							</li>
							<li>Možné připojištění vozidla, zvířecích miláčků</li>
						</ul>

						<div className='landing-main-section-icons'>
							<div className='landing-main-icon-wrapper'>
								<div className='landing-main-icon'>
									<img src={carIcon} alt='' />
								</div>
								<p>Pojištění extrémního sportu jízdy po dálnici D1 (v ceně)</p>
							</div>

							<div className='landing-main-icon-wrapper'>
								<div className='landing-main-icon'>
									<img src={wrenchIcon} alt='' />
								</div>
								<p>Asistenční služba Ve dne, v noci™</p>
							</div>
						</div>
					</div>

					<form className='landing-right'>
						<div className='form-header'>
							<h2>Zjistit cenu cestovního pojištění</h2>
						</div>
					</form>
				</div>
			</section>

			<section className='landing-icon-section container'>
				<h3>Před čím vás ochráníme</h3>
				<h2>Co kryje cestovní pojištění od nás?</h2>
				<div className='landing-icons-row-4'>
					<div className='landing-icon-wrapper'>
						<div className='landing-icon'>
							<img src={coinsIcon} alt='' />
						</div>
						<p>Náklady na ošetření</p>
					</div>
					<div className='landing-icon-wrapper'>
						<div className='landing-icon'>
							<img src={hospitalizationIcon} alt='' />
						</div>
						<p>Hospitalizaci a léky</p>
					</div>
					<div className='landing-icon-wrapper'>
						<div className='landing-icon'>
							<img src={truckIcon} alt='' />
						</div>
						<p>Nezbytné převozy a repatriaci</p>
					</div>
					<div className='landing-icon-wrapper'>
						<div className='landing-icon'>
							<img src={hearthIcon} alt='' />
						</div>
						<p>Odpovědnost za zdraví a majetek</p>
					</div>
				</div>
				<div className='landing-icons-row-3'>
					<div className='landing-icon-wrapper'>
						<div className='landing-icon'>
							<img src={luggageIcon} alt='' />
						</div>
						<p>Zavazadla a osobní věci (volitelně)</p>
					</div>
					<div className='landing-icon-wrapper'>
						<div className='landing-icon'>
							<img src={carIcon} alt='' />
						</div>
						<p>Vozidlo – technická asistence (volitelně)</p>
					</div>
					<div className='landing-icon-wrapper'>
						<div className='landing-icon'>
							<img src={pawIcon} alt='' />
						</div>
						<p>Zvířecí miláčky (volitelně)</p>
					</div>
				</div>
			</section>
		</main>
	);
};

export default LandingPage;
