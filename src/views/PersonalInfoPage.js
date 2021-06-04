import React, { useState, useEffect } from 'react';
import rightArrowIcon from '../assets/right-arrow.svg';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { 
    set_detail
} from '../redux/actions';


const PersonalInfoPage = ({
	detail_info,
	set_detail
}) => {

	let user_temp_data = {
		name: '',
		surname: '',
		birthday: '',
		id_number: 0,
		street: '',
		descriptive_number: 0,
		post_code: '',
		city: '',
		email: '',
		phone: '',
		is_insured: false
	}

	const [user_info, setUserInfo] = useState([]);
	const [current_user_index, setCurrentUserIndex] = useState(0);

	useEffect(() => {
		let user_count = detail_info.users_data.length;
		let temp_arr = [];
		for(let index = 0; index < user_count; index++) {
			temp_arr = [...temp_arr, user_temp_data];
		}
		setUserInfo(temp_arr);
	}, []);

	let history = useHistory();

	const updateUserData = (index, field, val) => {
		let temp = user_info;
		temp[index][field] = val;
		setUserInfo([...temp]);
	}

	const goNextUserinfo = () => {
		if((current_user_index+1) == user_info.length)
			history.push('/summary');
		else
			setCurrentUserIndex(current_user_index + 1);
	}

	const user_info_content = user_info && 
		user_info.map((item, index) => (
			current_user_index == index && 
			<div className='person-info-item' key={index}>
				<div className='form-group'>
					<h3 className='m-b-3'>
						Jméno<span>*</span>
					</h3>
					<input className='input-text w-100 p-11' type='text' placeholder='Jméno' value={item.name} onChange={(e) => updateUserData(index, 'name', e.target.value)}/>
				</div>
				<div className='form-group'>
					<h3 className='m-b-3'>
						Příjmení<span>*</span>
					</h3>
					<input className='input-text w-100 p-11' type='text' placeholder='Příjmení' value={item.surname} onChange={(e) => updateUserData(index, 'surname', e.target.value)}/>
				</div>
				<div className='form-group'>
					<h3 className='m-b-3'>
						Datum narození<span>*</span>
					</h3>
					<input className='input-text w-100 p-11' type='text' type='date' placeholder="dd-mm-yyyy" value={item.birthday} onChange={(e) => updateUserData(index, 'birthday', e.target.value)}/>
				</div>
				<div className='form-group'>
					<h3 className='m-b-3'>
						Rodné číslo<span>*</span>
					</h3>
					<input className='input-text w-100 p-11' type='text' placeholder='Rodné číslo' value={item.id_number} onChange={(e) => updateUserData(index, 'id_number', e.target.value)}/>
				</div>
				<div className='form-group'>
					<h3 className='m-b-3'>
						Ulice<span>*</span>
					</h3>
					<input className='input-text w-100 p-11' type='text' placeholder='Ulice' value={item.street} onChange={(e) => updateUserData(index, 'street', e.target.value)}/>
				</div>
				<div className='form-group'>
					<h3 className='m-b-3'>
						Číslo popisné<span>*</span>
					</h3>
					<input className='input-text w-100 p-11' type='text' placeholder='Číslo popisné' value={item.descriptive_number} onChange={(e) => updateUserData(index, 'descriptive_number', e.target.value)}/>
				</div>
				<div className='form-group'>
					<h3 className='m-b-3'>
						PSČ<span>*</span>
					</h3>
					<input className='input-text w-100 p-11' type='text' placeholder='PSČ' value={item.post_code} onChange={(e) => updateUserData(index, 'post_code', e.target.value)}/>
				</div>
				<div className='form-group'>
					<h3 className='m-b-3'>
						Město (Obec)<span>*</span>
					</h3>
					<input className='input-text w-100 p-11' type='text' placeholder='Město (Obec)' value={item.city} onChange={(e) => updateUserData(index, 'city', e.target.value)}/>
				</div>
				<div className='trip-type-box'>
					<h3 className='m-b-3'>
						Pojištěné osoby<span>*</span>
					</h3>
					<div className='form-group'>
						<label className='checkbox-container' htmlFor='insured_person'>Pojistník je současně pojištěnou osobou
							<input type='checkbox' id='insured_person' name='' className='input-checkbox' value={item.is_insured} onChange={(e) => updateUserData(index, 'is_insured', e.target.checked)}/>
							<span className='checkmark'></span>
						</label>
					</div>
				</div>
				<div className='form-group'>
					<h3 className='m-b-3'>
						E-mail<span>*</span>
					</h3>
					<input className='input-text w-100 p-11' type='text' placeholder='E-mail' value={item.email} onChange={(e) => updateUserData(index, 'email', e.target.value)}/>
				</div>
				<div className='form-group'>
					<h3 className='m-b-3'>
						Telefon<span>*</span>
					</h3>
					<input className='input-text w-100 p-11' type='text' placeholder='Telefon' value={item.phone} onChange={(e) => updateUserData(index, 'phone', e.target.value)}/>
				</div>
				<button 
					onClick={() => { goNextUserinfo(index) }
					} 
					className='button-orange m-b-30' 
					type='submit'
				>
				{(index + 1) == user_info.length ? 'Pokračovat k schrnutí' : 'Vyplnit další pojištenou osobu'} <img src={rightArrowIcon} alt='' />
				</button>
			</div>
	));

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
				{user_info_content}
			</div>
		</main>
	);
};

const mapStateToProps = ({ travelDetail}) => {
    const detail_info = travelDetail.detail;

	return { detail_info};
}

export default connect(
	mapStateToProps,
	{
		set_detail
	}
)(PersonalInfoPage);