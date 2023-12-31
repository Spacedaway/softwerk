const ToggleButton = ({ toggleNav, visible, isScrolled }) => {
	return (
		<button
			className='toggle'
			data-visible={visible ? 'true' : 'false'}
			data-scroll={isScrolled ? 'true' : 'false'}
			onClick={toggleNav}
		>
			<span className='toggle--bar toggle--bar__1'></span>
			<span className='toggle--bar toggle--bar__2'></span>
			<span className='toggle--bar toggle--bar__3'></span>
		</button>
	);
};

export default ToggleButton;
