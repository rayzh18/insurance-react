import React, { useState, useEffect } from 'react';
import { connect } from  'react-redux'

const ContractDocPage = () => {

	const [birthday, setBirthday] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');

	return (
		<main className='travel-detail general-page contract-doc-page'>
			<div className='row contain'>
				<div className='col-md-6 form-body'>
					<h3 className='header-title'>
						Smluvní dokumentace
					</h3>
					<div className='form-group'>
						<h3 className='m-b-3'>
							Datum narození<span>*</span>
						</h3>
						<input className='input-text w-100 p-11' type='date' placeholder="dd-mm-yyyy" value={birthday} onChange={(e) => setBirthday(e.target.value)}/>
					</div>
					<div className='form-group'>
						<h3 className='m-b-3'>
							Email<span>*</span>
						</h3>
						<input className='input-text w-100 p-11' type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
					</div>
					<div className='form-group'>
						<h3 className='m-b-3'>
							Telefonní číslo<span>*</span>
						</h3>
						<input className='input-text w-100 p-11' type='text' placeholder='Telefonní číslo' value={phone} onChange={(e) => setPhone(e.target.value)}/>
					</div>
					<div className='title-download'>Dokumenty ke stáhnutí</div>
					<a className='download-item' href='#'>Smlouva 312.pdf</a><br></br>
					<a className='download-item' href='#'>Pojistka 7381.pdf</a>
				</div>
				<div className='col-md-6'></div>
			</div>
		</main>
	);
};

export default ContractDocPage;
