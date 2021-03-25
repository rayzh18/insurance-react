import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import SuccessPage from './views/SuccessPage';
import LandingPage from './views/LandingPage';

const App = () => {
	return (
		<>
			<Navbar />
			<LandingPage />
			<Footer />
		</>
	);
};

export default App;
