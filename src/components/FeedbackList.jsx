// Import Feedback Item component
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

// Feedback List component with a feedback prop
function FeedbackList() {
	const { feedback } = useContext(FeedbackContext);

	// Conditional to return a string if no feedback item is found
	if (!feedback || feedback.length === 0) {
		return <p>No Feedback Yet</p>;
	}

	return (
		<div className='feedback-list'>
			<AnimatePresence>
				{/* Loop through feedback array and display each feedback item */}
				{feedback.map((item) => (
					// Add animation to review cards
					<motion.div
						key={item.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<FeedbackItem key={item.id} item={item} />
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);

	// Version without animation
	// return (
	// 	<div className='feedback-list'>
	// 		{/* Loop through feedback array and display each feedback item */}
	// 		{feedback.map((item) => (
	// 			<FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
	// 		))}
	// 	</div>
	// );
}

export default FeedbackList;
