import React, { useState, useEffect } from 'react';
import rightArrowIcon from '../assets/right-arrow.svg';
import Modal from 'react-bootstrap/Modal';

const SummaryPage = () => {

	const [isShowModal, setShowModal] = useState(false);

	const showModal = () => {
		setShowModal(true);
	}

	return (
		<main className='travel-detail summary-page'>
			<div className='item-center header-part'>
				<h3 className='title'>Cestovní pojištění online</h3>
			</div>
			<div className='tab-part'>
				<div className='items'>
					<div className='left-color-fill'>
					</div>
					<a className='item-detail checked'>
						1.Údaje o cestě
					</a>
					<a className='item-detail checked'>
						2.Výběr pojištovny
					</a>
					<a className='item-detail checked'>
						3.Osobní údaje
					</a>
					<a className='item-detail checked'>
						4.Shrnutí
					</a>
					<a className='item-detail'>
						5.Platba
					</a>
					<div className=''>
					</div>
				</div>
			</div>
			<div className='tab-part-mobile'>
				<div className='items'>
					<a className='item-detail checked'>
						1.Údaje o cestě
					</a>
					<a className='item-detail checked'>
						2.Výběr pojištovny
					</a>
					<a className='item-detail checked'>
						3.Osobní údaje
					</a>
					<a className='item-detail checked'>
						4.Shrnutí
					</a>
					<a className='item-detail'>
						5.Platba
					</a>
				</div>
			</div>
			<div className='detail-main personal-info-contain '>
				<div className='title item-center'>
					<span>4.</span>
					<h3>Shrnutí</h3>
				</div>
				<div className='item-one-line'>
					<div className='summary-left'>
						<div className='summary-items'>
							<h3>Pojišťovna - AXA (KOMFORT)</h3>
							<div className='summary-item'>
								<div>Cíl cesty</div>
								<div className='value'>Francie</div>
							</div>
							<div className='summary-item'>
								<div>Odjezd</div>
								<div className='value'>22.02.2021</div>
							</div>
							<div className='summary-item'>
								<div>Příjezd</div>
								<div className='value'>25.02.2021</div>
							</div>
							<div className='summary-item'>
								<div>Typ cesty</div>
								<div className='value'>Turistická</div>
							</div>
							<div className='summary-item'>
								<div>Typ pobytu</div>
								<div className='value'>Jednorázový</div>
							</div>
						</div>
						<div className='summary-items'>
							<h3>Základní pojištění</h3>
							<div className='summary-item'>
								<div>Léčebné výlohy</div>
								<div className='value'>Ano</div>
							</div>
							<div className='summary-item'>
								<div>Asistenční služby</div>
								<div className='value'>Ano</div>
							</div>
						</div>
						<div className='summary-items'>
							<h3>Doplňkové pojištění</h3>
							<div className='summary-item'>
								<div>Úrazové pojištění</div>
								<div className='value'>Ano</div>
							</div>
							<div className='summary-item'>
								<div>Pojištění odpovědnosti</div>
								<div className='value'>Ano</div>
							</div>
							<div className='summary-item'>
								<div>Pojištění zavazadel</div>
								<div className='value'>Ano</div>
							</div>
							<div className='summary-item'>
								<div>Připojištění storna cesty</div>
								<div className='value'>Ne</div>
							</div>
						</div>
						<div className='summary-items'>
							<h3>Sportovní činnost</h3>
							<div className='summary-item'>
								<div>Rekreační sporty</div>
								<div className='value'>Ano</div>
							</div>
							<div className='summary-item'>
								<div>Zimní sporty</div>
								<div className='value'>Ano</div>
							</div>
							<div className='summary-item'>
								<div>Rizikové sporty</div>
								<div className='value'>Ne</div>
							</div>
							<div className='summary-item'>
								<div>Extrémní sporty</div>
								<div className='value'>Ne</div>
							</div>
							<div className='summary-item'>
								<div>Organizovaný sport</div>
								<div className='value'>Ne</div>
							</div>
						</div>
						<div className='summary-items'>
							<h3>Připojištění</h3>
							<div className='summary-item'>
								<div>Autoasistence</div>
								<div className='value'>Ano</div>
							</div>
							<div className='summary-item'>
								<div>Půjčené vozidlo</div>
								<div className='value'>Ano</div>
							</div>
							<div className='summary-item'>
								<div>Drink povolen</div>
								<div className='value'>Ne</div>
							</div>
							<div className='summary-item'>
								<div>Chronické onemocnění</div>
								<div className='value'>Ne</div>
							</div>
						</div>
					</div>
					<div >
						<div className='summary-right'>
							<div className='summary-items'>
								<h3>Pojistník - Fyzická osoba</h3>
								<div className='summary-item'>
									<div>Jméno a příjmení</div>
									<div className='value'>Marek Vašík</div>
								</div>
								<div className='summary-item'>
									<div>Rodné číslo</div>
									<div className='value'>000114/3142</div>
								</div>
								<div className='summary-item'>
									<div>Státní občanství</div>
									<div className='value'>Česká republika</div>
								</div>
								<div className='summary-item'>
									<div>Ulice, číslo popisné</div>
									<div className='value'>Rumunská 1798/1 231</div>
								</div>
								<div className='summary-item'>
									<div>Město, PSČ</div>
									<div className='value'>Ústí nad Labem 3, 400 03</div>
								</div>
								<div className='summary-item'>
									<div>E-mail</div>
									<div className='value'>Marekvašík@gmail.com</div>
								</div>
								<div className='summary-item'>
									<div>Telefonní číslo</div>
									<div className='value'>648 291 491</div>
								</div>
							</div>
							<div className='summary-items'>
								<h3>Pojištěné osoby - 1</h3>
								<div className='summary-item'>
									<div>Pojistník je pojištěným</div>
									<div className='value'>Ano</div>
								</div>
								<div className='summary-item'>
									<div>Rodina</div>
									<div className='value'>Ne</div>
								</div>
							</div>
							<div className='summary-items'>
								<h3>Cena</h3>
								<div className='summary-item'>
									<div>Pojištovna</div>
									<div className='value'>Assistance</div>
								</div>
								<div className='summary-item'>
									<div>Typ</div>
									<div className='value'>Komfort</div>
								</div>
								<div className='summary-item'>
									<div>Cena</div>
									<div className='value'>89 Kč</div>
								</div>
							</div>
						</div>
						<div className='form-group'>
							<label className='checkbox-container' htmlFor='insured_person'>Pojistník je současně pojištěnou osobou
								<input type='checkbox' id='insured_person' name='' className='input-checkbox' />
								<span className='checkmark'></span>
							</label>
						</div>
						<div className='form-group'>
							<label className='checkbox-container' htmlFor='personal_info'>Seznámení s Informacemi o zpracování osobních údajů
								<input type='checkbox' id='personal_info' name='' className='input-checkbox' />
								<span className='checkmark'></span>
							</label>
						</div>
						<div className='form-group m-b-30'>
							<label className='checkbox-container' htmlFor='agree_insurance_condition'>Souhlasím s <a href=''>pojistnými podmínkami</a>
								<input type='checkbox' id='agree_insurance_condition' name='' className='input-checkbox' />
								<span className='checkmark'></span>
							</label>
						</div>
						<button className='button-orange m-b-30 w-100' onClick={() => showModal()}>
							Objednat <img src={rightArrowIcon} alt='' />
						</button>
					</div>
				</div>
			</div>
			<Modal dialogClassName="summary-modal" show={isShowModal} onHide={() => setShowModal(false)}>
				<h3>Pojištění je platné až po zaplacení</h3>
				<button className='button-orange' onClick={() => showModal()}>
					Objednat <img src={rightArrowIcon} alt='' />
				</button>
			</Modal>
		</main>
	);
};

export default SummaryPage;
