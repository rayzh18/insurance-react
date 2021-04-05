import React, { useState, useEffect } from 'react';
import rightArrowIcon from '../assets/right-arrow.svg';

const TravelDetailPage = () => {

	const [count_insured_persons , setCountInsuredPersons] = useState(0);

	return (
		<main className='travel-detail'>
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
					<a href='/choose_company' className='item-detail'>
						2.Výběr pojištovny
					</a>
					<a className='item-detail'>
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
					<a href='/choose_company' className='item-detail'>
						2.Výběr pojištovny
					</a>
					<a className='item-detail'>
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
			<div className='detail-main form-body'>
				<div className='title item-center'>
					<span>1.</span>
					<h3>Údaje o cestě</h3>
				</div>
				<div className='form-group'>
					<h3 className='m-b-3'>
						Kam cestujete<span>*</span>
					</h3>
					<input className='input-text w-100 p-11' type='text' placeholder='Kam cestujete' />
				</div>
				<div className='item-center'>
					<div className='form-group w-50 m-r-5'>
						<h3 className='m-b-3'>
							Odjezd<span>*</span>
						</h3>
						<input className='input-text w-100 p-11' placeholder='Odjezd' type='date' />
					</div>
					<div className='form-group w-50'>
						<h3 className='m-b-3'>
							Návrat<span>*</span>
						</h3>
						<input className='input-text w-100 p-11' placeholder='Návrat' type='date' />
					</div>
				</div>
				<div className='trip-type-box'>
					<h3 className='m-b-3'>
						Typ cesty<span>*</span>
					</h3>
					<div className='form-group'>
						<input type='radio' id='tourist' name='trip_type' className='input-radio' />
						<label for='tourist'>
							Turistická
									</label>
					</div>
					<div className='form-group'>
						<input type='radio' id='manual-work' name='trip_type' className='input-radio' />
						<label for='manual-work'>
							Pracovní (manuální práce)
									</label>
					</div>
					<div className='form-group'>
						<input type='radio' id='administrative-work' name='trip_type' className='input-radio' />
						<label for='administrative-work'>
							Pracovní (administrativní práce)
									</label>
					</div>
				</div>
				<div className='trip-type-box'>
					<h3 className='m-b-3'>
						Sport<span>*</span>
					</h3>
					<div className='form-group'>
						<label className='checkbox-container' for='recreational'>Rekreační
							<input type='checkbox' id='recreational' name='' className='input-checkbox' />
							<span className='checkmark'></span>
						</label>
					</div>
					<div className='form-group'>
						<label className='checkbox-container' for='risky'>Rizikový
							<input type='checkbox' id='risky' name='' className='input-checkbox' />
							<span className='checkmark'></span>
						</label>
					</div>
				</div>
				<div className='insured-person form-group'>
					<h3 className='m-b-3'>
						Pojištěné osoby<span>*</span>
					</h3>
					<div className='count-box'>
						<div onClick={() => {if(count_insured_persons > 0) setCountInsuredPersons(count_insured_persons-1)}} className='number-button'><i class="fas fa-minus"></i></div>
						<div>{count_insured_persons}</div>
						<div onClick={() => setCountInsuredPersons(count_insured_persons+1)} className='number-button'><i class="fas fa-plus"></i></div>
					</div>
				</div>
				<div className='person-flight form-group'>
					<label>Osobě č.1 je</label>
					<input type='number'></input>
					<label>let</label>
				</div>
				<div className='person-flight form-group'>
					<label>Osobě č.2 je</label>
					<input type='number'></input>
					<label>let</label>
				</div>
				<div className='form-group'>
					<label className='checkbox-container' for='one-family'>Tvoříme jednu rodinu
						<input type='checkbox' id='one-family' name='' className='input-checkbox' />
						<span className='checkmark'></span>
					</label>
				</div>

				<button className='button-orange m-b-30' type='submit'>
					Pokračovat k výběru nabídek pojišťoven <img src={rightArrowIcon} alt='' />
				</button>
			</div>
		</main>
	);
};

export default TravelDetailPage;
