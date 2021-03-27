import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useHistory,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';

import LandingPage from './views/LandingPage';
import FormsPage from './views/FormsPage';
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

					<Route path='/forms'>
						<FormsPage />
					</Route>
				</Switch>

				<Footer />
			</Router>
		</>
	);
};

export default App;
