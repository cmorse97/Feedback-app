// Importing PropTypes for prop requirements
import PropTypes from 'prop-types';

// Main header component with props
function Header({ text, bgColor, textColor }) {
	// Declaring styles here for cleaner code
	const headerStyles = {
		backgroundColor: bgColor,
		color: textColor,
	};

	return (
		<header style={headerStyles}>
			<div className='container'>
				<h2>{text}</h2>
			</div>
		</header>
	);
}

// Default props
Header.defaultProps = {
	text: 'Feedback UI',
	bgColor: 'rgba(0,0,0,0.4)',
	textColor: '#ff6a95',
};

// Make props values more strict
Header.propTypes = {
	text: PropTypes.string,
};

export default Header;
