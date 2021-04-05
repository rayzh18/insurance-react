import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useHistory,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TravelDetailPage from './views/TravelDetailPage';
import ChooseCompanyPage from './views/ChooseCompanyPage';
import LandingPage from './views/LandingPage';
import SuccessPage from './views/SuccessPage';

const App = () => {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/'>
						<LandingPage />
					</Route>
					<Route path='/success'>
						<SuccessPage></SuccessPage>
					</Route>
					<Route path='/travel_detail'>
						<TravelDetailPage></TravelDetailPage>
					</Route>
					<Route path='/choose_company'>
						<ChooseCompanyPage></ChooseCompanyPage>
					</Route>
				</Switch>
				<Footer />
			</Router>
		</>
	);
};

export default App;
