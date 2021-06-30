// react
import { useLocation } from 'react-router-dom';
import { FaMinus, FaPlus } from 'react-icons/fa';

// third-party
import PropTypes from 'prop-types';

const Header = ({ title, onAdd, showAdd }) => {
	const location = useLocation();
	let addButton;

	if (location.pathname === '/' && !showAdd) {
		addButton = <FaPlus size={28} onClick={onAdd} cursor='pointer' />;
	} else if (location.pathname === '/' && showAdd) {
		addButton = <FaMinus size={28} onClick={onAdd} cursor='pointer' />;
	}

	return (
		<header className='header'>
			<h1>{title}</h1>
			{addButton}
		</header>
	);
};

Header.defaultProps = {
	title: 'Task Tracker',
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Header;
