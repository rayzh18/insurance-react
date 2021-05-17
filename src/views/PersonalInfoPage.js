import React, { useState, useEffect } from 'react';
import rightArrowIcon from '../assets/right-arrow.svg';
import { useHistory } from "react-router-dom";

const PersonalInfoPage = () => {

	let history = useHistory();

	return (
		<main className='travel-detail personal-information'>
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
					<a className='item-detail'>
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
					<a className='item-detail'>
						4.Shrnutí
					</a>
					<a className='item-detail'>
						5.Platba
					</a>
				</div>
			</div>
			<div className='detail-main personal-info-contain form-body'>
				<div className='title item-center'>
					<span>3.</span>
					<h3>Osobní údaje pojistníka</h3>
				</div>
				<div className='summary-part'>
					<h3>Shrnutí</h3>
					<div className='summary-item'>
						<div>Pojištovna</div>
						<div className='value'>Assistance</div>
					</div>
					<div className='summary-item'>
						<div>Cena</div>
						<div className='value'>89 Kč</div>
					</div>
					<div className='summary-item'>
						<div>Typ</div>
						<div className='value'>Komfort</div>
					</div>
				</div>
				<div className='form-group'>
					<h3 className='m-b-3'>
						Jméno<span>*</span>
					</h3>
					<input className='input-text w-100 p-11' type='text' placeholder='Jméno' />
				</div>
				<div className='form-group'>
					<h3 className='m-b-3'>
						Příjmení<span>*</span>
					</h3>
					<input className='input-text w-100 p-11' type='text' placeholder='Příjmení' />
				</div>
				<div className='form-group'>
					<h3 className='m-b-3'>
						Datum narození<span>*</span>
					</h3>
					<input className='input-text w-100 p-11' type='text' type='date' placeholder="dd-mm-yyyy"/>
				</div>
				<div className='form-group'>
					<h3 className='m-b-3'>
						Rodné číslo<span>*</span>
					</h3>
					<input className='input-text w-100 p-11' type='text' placeholder='Rodné číslo' />
				</div>
				<div className='form-group'>
					<h3 className='m-b-3'>
						Ulice<span>*</span>
					</h3>
					<input className='input-text w-100 p-11' type='text' placeholder='Ulice' />
				</div>
				<div className='form-group'>
					<h3 className='m-b-3'>
						Číslo popisné<span>*</span>
					</h3>
					<input className='input-text w-100 p-11' type='text' placeholder='Číslo popisné' />
				</div>
				<div className='form-group'>
					<h3 className='m-b-3'>
						PSČ<span>*</span>
					</h3>
					<input className='input-text w-100 p-11' type='text' placeholder='PSČ' />
				</div>
				<div className='form-group'>
					<h3 className='m-b-3'>
						Město (Obec)<span>*</span>
					</h3>
					<input className='input-text w-100 p-11' type='text' placeholder='Město (Obec)' />
				</div>
				<div className='trip-type-box'>
					<h3 className='m-b-3'>
						Pojištěné osoby<span>*</span>
					</h3>
					<div className='form-group'>
						<label className='checkbox-container' htmlFor='insured_person'>Pojistník je současně pojištěnou osobou
							<input type='checkbox' id='insured_person' name='' className='input-checkbox' />
							<span className='checkmark'></span>
						</label>
					</div>
				</div>
				<div className='form-group'>
					<h3 className='m-b-3'>
						E-mail<span>*</span>
					</h3>
					<input className='input-text w-100 p-11' type='text' placeholder='E-mail' />
				</div>
				<div className='form-group'>
					<h3 className='m-b-3'>
						Telefon<span>*</span>
					</h3>
					<input className='input-text w-100 p-11' type='text' placeholder='Telefon' />
				</div>
				<button onClick={() => history.push('/summary')} className='button-orange m-b-30' type='submit'>
				Pokračovat k schrnutí <img src={rightArrowIcon} alt='' />
				</button>
			</div>
		</main>
	);
};

export default PersonalInfoPage;
