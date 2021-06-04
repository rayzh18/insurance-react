import React from 'react';

import successIcon from '../assets/success-icon.svg';
const SuccessPage = () => {
	return (
		<main className='success'>
			<div className='success-tick'>
				<img src={successIcon} alt='' />
			</div>
			<h1>Vaše objednávka je dokončena</h1>
			<p>Veškeré informace jsem vám psali na váš email</p>
		</main>
	);
};

export default SuccessPage;
