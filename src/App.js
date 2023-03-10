// Importing components, state, and dependencies
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutIconLink from './components/AboutIconLink';

// Main app component
function App() {
	// Bring in feedback data and set that as State
	const [feedback, setFeedback] = useState(FeedbackData);

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
	};

	return (
		<FeedbackProvider>
			{/* Add routes to root and about page */}
			<Router>
				<Header />
				<div className='container'>
					<Routes>
						<Route
							exact
							path='/'
							element={
								<>
									<FeedbackForm handleAdd={addFeedback} />
									<FeedbackStats />
									<FeedbackList handleDelete={deleteFeedback} />
								</>
							}
						></Route>

						<Route path='/about' element={<AboutPage />} />
					</Routes>

					<AboutIconLink />
				</div>
			</Router>
		</FeedbackProvider>
	);
}

export default App;
