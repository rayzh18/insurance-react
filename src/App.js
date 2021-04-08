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
import ContactPage from './views/ContactPage';
import PersonalInfoPage from './views/PersonalInfoPage';
import SummaryPage from './views/SummaryPage';
import PaymentPage from './views/PaymentPage';
import GeneralPage from './views/GeneralPage';

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
					<Route exact path='/personal_information'>
						<PersonalInfoPage />
					</Route>
					<Route exact path='/summary'>
						<SummaryPage />
					</Route>
					<Route exact path='/payment'>
						<PaymentPage />
					</Route>
					<Route exact path='/general'>
						<GeneralPage />
					</Route>
					<Route exact path='/contact'>
						<ContactPage />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</>
	);
};

export default App;
