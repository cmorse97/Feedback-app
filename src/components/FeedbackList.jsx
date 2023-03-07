// Import Feedback Item component
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';

// Feedback List component with a feedback prop
function FeedbackList({ feedback, handleDelete }) {
	// Conditional to return a string if no feedback item is found
	if (!feedback || feedback.length === 0) {
		return <p>No Feedback Yet</p>;
	}

	// Add animation to review cards
	return (
		<div className='feedback-list'>
			<AnimatePresence>
				{/* Loop through feedback array and display each feedback item */}
				{feedback.map((item) => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<FeedbackItem
							key={item.id}
							item={item}
							handleDelete={handleDelete}
						/>
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

FeedbackList.propTypes = {
	feedback: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			rating: PropTypes.number.isRequired,
		})
	),
};

export default FeedbackList;
