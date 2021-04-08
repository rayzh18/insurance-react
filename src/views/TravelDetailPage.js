import React, { useState, useEffect } from 'react';
import rightArrowIcon from '../assets/right-arrow.svg';

const TravelDetailPage = () => {

	const [count_insured_persons, setCountInsuredPersons] = useState(1);
	const [age_data, setAgeData] = useState([1]);

	const handleCountInsurance = (operation) => {
		if(operation == '+') {
			setAgeData([...age_data, 1]);
			setCountInsuredPersons(count_insured_persons + 1);
		}
		else if(operation == '-' && count_insured_persons > 1) {
			let temp = age_data.slice(0, count_insured_persons-1);
			setAgeData(temp);
			setCountInsuredPersons(count_insured_persons - 1);
		}
	}
	const changeAgeData = (value, index) => {
		if(value > 0) {
			let temp = age_data;
			temp[index] = value;
			setAgeData([...temp]);
		}
	}

	const handleClickSecondtab = () => {
		// history.push('/choose_company')
	}

	const age_components = age_data && 
				age_data.map((item, index) => (
					<div className='person-flight form-group' key={index}>
						<label>Osobě č.{index + 1} je</label>
						<input type='number' value={item ?? 0} onChange={(e) => changeAgeData(parseInt(e.target.value), index)}></input>
						<label>let</label>
					</div>
				))

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
					<a onClick={handleClickSecondtab} className='item-detail'>
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
					<a className='item-detail'>
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
						<label htmlFor='tourist'>
							Turistická
									</label>
					</div>
					<div className='form-group'>
						<input type='radio' id='manual-work' name='trip_type' className='input-radio' />
						<label htmlFor='manual-work'>
							Pracovní (manuální práce)
									</label>
					</div>
					<div className='form-group'>
						<input type='radio' id='administrative-work' name='trip_type' className='input-radio' />
						<label htmlFor='administrative-work'>
							Pracovní (administrativní práce)
									</label>
					</div>
				</div>
				<div className='trip-type-box'>
					<h3 className='m-b-3'>
						Sport<span>*</span>
					</h3>
					<div className='form-group'>
						<label className='checkbox-container' htmlFor='recreational'>Rekreační
							<input type='checkbox' id='recreational' name='' className='input-checkbox' />
							<span className='checkmark'></span>
						</label>
					</div>
					<div className='form-group'>
						<label className='checkbox-container' htmlFor='risky'>Rizikový
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
						<div onClick={() => handleCountInsurance('-')} className='number-button'><i className="fas fa-minus"></i></div>
						<div>{count_insured_persons}</div>
						<div onClick={() => handleCountInsurance('+')} className='number-button'><i className="fas fa-plus"></i></div>
					</div>
				</div>
				{age_components}
				<div className='form-group'>
					<label className='checkbox-container' htmlFor='one-family'>Tvoříme jednu rodinu
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
