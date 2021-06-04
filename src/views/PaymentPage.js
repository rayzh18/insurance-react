import React, { useState, useEffect } from 'react';
import qr_code from '../assets/qr_code.png';
import icon_payment1 from '../assets/payment1-icon.png';
import icon_payment2 from '../assets/payment2-icon.png';
import rightArrowIcon from '../assets/right-arrow.svg';

const PaymentPage = () => {

	const [payment_method, setPaymentMethod] = useState('');
	const [is_result_visible, setResultVisible] = useState(false);

	const changePaymentMethod = (event) => {
		setPaymentMethod(event.target.value);
	}

	return (
		<main className='travel-detail payment-page'>
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
					<a className='item-detail checked'>
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
					<a className='item-detail checked'>
						5.Platba
					</a>
				</div>
			</div>
			<div className='detail-main personal-info-contain'>
				<div className='title item-center'>
					<span>5.</span>
					<h3>Platba</h3>
				</div>
				{
				!is_result_visible ?
				(<>
					<h4 className='title'>Vyberte ty platby</h4>
					<div className='item-one-line form-body'>
						<div className='payment-type'>
							<div className={'payment-item ' + ( payment_method == "bank_transfer" ? "selected" : "" )}  >
								<input type='radio' id='bank_transfer' value='bank_transfer' name='payment_type' onChange={(e) => changePaymentMethod(e) } className='input-radio' />
								<label htmlFor='bank_transfer'>
									Bankovní převod
								</label>
							</div>
							<div className={'payment-item credit m-b-30 ' + ( payment_method == "credit_card" ? "selected" : "" )}>
								<input type='radio' id='credit_card' value='credit_card' name='payment_type' onChange={(e) =>  changePaymentMethod(e)} className='input-radio' />
								<label htmlFor='credit_card'>
									Bankovní převod
								</label>
								<div>
									<img src={icon_payment1}></img>
									<img src={icon_payment2}></img>
								</div>
							</div>
							<button onClick={() => setResultVisible(true)} className='button-orange m-b-30 w-100'>
								Zaplatit <img src={rightArrowIcon} alt='' />
							</button>
						</div>
						<div className='summary-part'>
							<h3>Shrnutí</h3>
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
				</>)
				:
				(<div className='result'>
					<div className='description'>
						Platební údaje společně s dokumenty k pojištění máte v e-mailu: <br/><span >kaseondra@gmail.com</span>
					</div>
					<div className='summary-items'>
						<div className='summary-item'>
							<div>Účet společnosti</div>
							<div className='value'>2200997481/2010</div>
						</div>
						<div className='summary-item'>
							<div>Částka pojistného</div>
							<div className='value'>44 Kč</div>
						</div>
						<div className='summary-item'>
							<div>Variabilní symbol</div>
							<div className='value'>9180004469</div>
						</div>
						<div className='summary-item'>
							<div>Specifický symbol</div>
							<div className='value'>13</div>
						</div>
					</div>
					<div className='qr-description'>
						Nebo zaplaťte přes QR kod
					</div>
					<div className='qr-image'>
						<img src={qr_code}></img>
					</div>
				</div>)
				}
			</div>
		</main>
	);
};

export default PaymentPage;
