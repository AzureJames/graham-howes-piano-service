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
							<p>address</p>
							<p>address</p>
						</div>
						<div>
							<p>
								<a href='tel:7'>7</a>
							</p>
							<p>
								<a href='mailto:1@gmail.com'>1@gmail.com</a>
							</p>
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
					{/* <div className='footer-two' style={{marginTop: '20px'}}>
						<q style={{fontSize: '16px', paddingBlock: '1rem', display: 'block'}}>A society grows great when old men plant trees in whose shade they shall never sit.</q><cite style={{fontSize: '16px', paddingBlock: '1rem'}}> -Greek Proverb</cite>
						<h3>Disclaimer</h3>
						<p className='smltxt'>Intuit, QuickBooks, and QuickBooks ProAdvisor are registered trademarks of Intuit Inc</p>
						<p className='smltxt'>Used with permission under the QuickBooks ProAdvisor Agreement</p>						
					</div> */}
				</div>

				{/* <div className='secondary-footer'>
					<p className='copyright'>©{new Date().getFullYear()} REACT-BASE</p>
				</div> */}
			</footer>
		</>
	);
};

export default Footer;
