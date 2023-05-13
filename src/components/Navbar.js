import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//styles
import '../scss/components/_navbar.scss';

//logo
import Logo from '../components/assets/pexels-bryan-geraldo-586415.jpg';

function Navbar(props) {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<>
			{/* props.classname on navbar if we want to add any specific styling to the navbar on a certain page. */}
			<nav className={`navbar ${props.className}`} role='navigation'>
				<div className='logo'>
					<a href='/'>
						<img src={Logo} alt='Placeholder logo' height={120}></img>
					</a>
				</div>
				<div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className='nav-item'>
							<Link to='/' className='nav-links' onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						{/* <li className='nav-item'>
							<Link to='/tenthirtyone' onClick={closeMobileMenu}>
								1031s
							</Link>
						</li> */}
						<li className='nav-item'>
							<Link to='/contact' onClick={closeMobileMenu}>
								Contact
							</Link>
						</li>
					</ul>
				</div>
				<div
					onClick={handleClick}
					aria-label='Main Menu'
					className={click ? 'hamburger is-active' : 'hamburger'}
				>
					<span className='line'></span>
					<span className='line'></span>
					<span className='line'></span>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
