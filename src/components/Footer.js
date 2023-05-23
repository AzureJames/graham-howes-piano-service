import React from 'react';
import { Link } from 'react-router-dom';

//STYLING
import '../scss/components/_footer.scss';

//IMGS
import Logo from '../components/assets/pexels-bryan-geraldo-586415.jpg';

const Footer = () => {
	return (
		<>
			<footer style={{backgroundColor: 'black'}}>
				<div className='main-footer inner-container'>
					<div className='footer-one'>
						<div>
							{/* <h3>Address</h3> */}
							<p>Graham Howes Piano Service</p>
							<p>Derby, NY</p> {/*6869 Kimberly Lane
Derby, NY 14047 */}
						</div>
						<div>
							<p>
								<a href='tel:+7165627138'>Phone: (716) 562-7138</a>
								<a href='tel:+7168169480'>Cell: (716) 816-9480</a>
							</p>
							{/* <p>
								<a href='mailto:1@gmail.com'>1@gmail.com</a>
							</p> */}
							<p>Web design by <a href='https://azurejames.com/portfolio/'>Azure James</a></p>
						</div>
						{/* <ul>
							<li className='nav-item'>
								<Link to='/' className='nav-links'>
									Home
								</Link>
							</li>
							<li className='nav-item'>
								<Link to='/contact'>Contact Us</Link>
							</li>
						</ul> */}
						<div className='logo'>
							<a href='/'>
								<img src={Logo} alt='Placeholder logo' height={50} width={80} />
							</a>
						</div>
					</div>	
				</div>

				{/* <div className='secondary-footer'>
					<p className='copyright'>©{new Date().getFullYear()} REACT-BASE</p>
				</div> */}
			</footer>
		</>
	);
};

export default Footer;
