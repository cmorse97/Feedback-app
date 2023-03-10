import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
	const { feedback } = useContext(FeedbackContext);

	// Calculate ratings average
	let average =
		feedback.reduce((acc, cur) => {
			return acc + cur.rating;
		}, 0) / feedback.length;

	// Rating will only have 1 decimal place, and no decimal if it's a 0.
	average = average.toFixed(1).replace(/[.,]0$/, '');

	return (
		<div className='feedback-stats'>
			<h4>{feedback.length} Reviews</h4>
			<h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
		</div>
	);
}

export default FeedbackStats;
