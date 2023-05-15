import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import CardList from '../components/CardList';
import BannerCard from '../components/BannerCard';
import DevBanner from '../components/DevBanner';
import FullPost from '../components/FullPost';
import CurvySection from '../components/CurvySection';
import HeroBanner from '../components/HeroBanner';
import Placeholder from '../img/pexels-bryan-geraldo-586415.jpg';
import { InfiniteLoopSlider, Tag, shuffle, random } from '../components/InfiniteLoopSlider';
import _button from '../scss/components/_button.scss';


//STYLING
import '../scss/pages/_home.scss';

function Home() {
	return (
		<div className='home'>
			<div className='bg'>
				<Navbar />
				<BannerCard
					index=''
					title='Graham Howes Piano Service'
					body='“Serving the Musical Community for 40 Years”'
					body2=''
				></BannerCard>
				{/* 
				
				<div>
					<h1 className='rate-title'>rate title</h1>
					<HeroBanner />
			    </div> */}
			</div>

			<CurvySection title="Keep it sounding beautiful!" tagline='Ideally, pianos should be tuned two times per year.'></CurvySection>
			<div className='inner-container' style={{marginBottom: '3rem'}}>

			{/* <div className='tag-list'> 
			{ [...new Array(3)].map((_, i) => (
				<InfiniteLoopSlider key={i} duration={Math.floor(Math.random() * (10000)) + 10000 } reverse={i % 2}>
				{ shuffle(['♬', '♪', '♩', '♭', '♮', '♩', '♬', '♪', '♬', '♪', '♩', '♭', '♮', '♩', '♬', '♪', '♭', '♮', '♩', '♬', '♪']).slice(0, 29).map(tag => (
					<Tag text={tag} key={tag}/>
				))}
				</InfiniteLoopSlider>
				)) }
			 <div className='fade'/>
			</div> */}



				{/* <a href='http://eepurl.com/ioFNzc' className='btn btn--primary'>Subscribe</a> */}

			{/* HERO BANNER FROM BLC??
			CURVY BANNER */}
			<DevBanner
				title='Alternate About'
				tagline='(bio pic here) Graham Howes RPT is a Registered Piano Technician with the Piano Technicians Guild Inc, and a Steinway Trained Technician. Graham Howes Piano Service specializes in top quality piano tuning and regulation, appraisals, and more.'
				tagline2=''
			></DevBanner>

				<h2 className='off-white'>About</h2>
				<img src={Placeholder} alt='piano' style={{maxWidth: '50rem'}}></img>
				<p className='off-white m-w65' style={{marginInline: '1rem', marginBottom: '2rem'}}>
			    	(bio pic here) Graham Howes RPT is a Registered Piano Technician with the Piano Technicians Guild Inc, and a Steinway Trained Technician. Graham Howes Piano Service specializes in top quality piano tuning and regulation, appraisals, and more.
				</p> 
				<div className='flex1200'>
					<a href="#" className='btn--primary'>Facebook</a>
					<a href="#" className='btn--primary'>Piano Technician's Guild</a>
				</div>
			</div>

			<div className='flex1200'>
			<CardList
					index=''
					title='Tuning Services'
					body=""
					body2=''
					ull='- Piano Tuning and Repair'
					ull2='- Concert Tuning and Voicing'
					ull3=''
					ull4=''
					ull5=''
					ull6=''
					oll=''
					oll2=''
				></CardList>
				<CardList
					index=''
					title='Restoration Services'
					body=""
					body2=''
					ull='- Action Restoration'
					ull2='- Action Regulation'
					ull3='- Full Piano Restoration'
					ull4=''
					ull5=''
					ull6=''
					oll=''
					oll2=''
				></CardList>
				<CardList
				index=''
				title='Other Services'
				body=""
				body2=''
				ull='- Climate Control System Installation'
				ull2='- Piano Appraisals and Consultations'
				ull3=''
				ull4=''
				ull5=''
				ull6=''
				oll=''
				oll2=''
			></CardList>
			</div>

			<FullPost
				url='URL for the post'
				type=''
				title='Experience'
				summary='Graham Howes Piano Service brings a wealth of experience and knowledge to the job.'
				summary2=''
				src={Placeholder}
				alt=''
			/>
			<div className='flex1200'>
				<CardList
					index=''
					title='Employment:'
					body=""
					body2=''
					ull='-- Hamburg Music Center'
					ull2='-- Jordan Kitt’s Music (Washington DC)'
					ull3='-- Peabody Institute (Baltimore MD)'
					ull4='-- Denton, Cottier and Daniels'
					oll=''
					oll2=''
				></CardList>
								<CardList
					index=''
					title=''
					body=""
					body2=''
					ull='-- Shea’s Buffalo'
					ull2='-- Buffalo Philharmonic'
					ull3='-- Phase Recording Studio (Washinton DC)'
					ull4='-- Audio Magic Recording Studio'
					oll=''
					oll2=''
				></CardList>
								<CardList
					index=''
					title=''
					body=""
					body2=''	
					ull2='-- Buffalo State University'
					ull3='-- SUNY at Fredonia'
					ull4='-- Hamburg Central Schools'
					ull5='-- West Seneca Central Schools'
					ull6='-- Numerous local (WNY) Churches'
					oll=''
					oll2=''
				></CardList>
			</div>
			<div className='flex1200'>
				<img src={Placeholder} alt='piano' style={{maxWidth: '100vw'}}></img>
			</div>
			<div className='flex1200'>

				<a href='contact'>
					{/* <Card
						index=''
						title='Service/info'
						body='Links to contact now. Click here to contact us today and schedule a consultation.'
						body2=''
					></Card> */}
				</a>
			</div>
			<Footer />
		</div>
	);
}

export default Home;
