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
					index='text'
					title='Graham Howes Piano Service'
					body='Professional Piano Tuning [and Repair?] in [city/area]'
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

			<div className='tag-list'> 
			{ [...new Array(3)].map((_, i) => (
				<InfiniteLoopSlider key={i} duration={Math.floor(Math.random() * (10000)) + 10000 } reverse={i % 2}>
				{ shuffle(['♬', '♪', '♩', '♭', '♮', '♩', '♬', '♪', '♬', '♪', '♩', '♭', '♮', '♩', '♬', '♪', '♭', '♮', '♩', '♬', '♪']).slice(0, 29).map(tag => (
					<Tag text={tag} key={tag}/>
				))}
				</InfiniteLoopSlider>
				)) }
			 <div className='fade'/>
			</div>



				{/* <a href='http://eepurl.com/ioFNzc' className='btn btn--primary'>Subscribe</a> */}

			{/* HERO BANNER FROM BLC??
			CURVY BANNER */}
			<DevBanner
				title='My Mission'
				tagline='Educational/life/accolades/philosophy'
				tagline2='Tagline here'
			></DevBanner>

				<h2 className='off-white'>About Me</h2>
				<img src={Placeholder} alt='piano' style={{maxWidth: '50rem'}}></img>
				<p className='off-white m-w65' style={{marginInline: '1rem', marginBottom: '2rem'}}>
			    	bio pic. Graham Howes Piano Service specializes in... credentials, philosophy etc
				</p> 
				<div className='flex1200'>
					<a href="#" className='btn--primary'>Facebook</a>
					<a href="#" className='btn--primary'>Piano Technician's Guild</a>
				</div>
				<h2>Services</h2>
			</div>
			<div className='flex1200'>
				<CardList
					index='text'
					title='Service 1 with List'
					body="Text here"
					body2='Text here'
					ull='* Text here'
					ull2='* Text here'
					ull3='* Text here'
					ull4='* Text here'
					ull5='* Text here'
					ull6=''
					oll='Text here'
					oll2='Text here'
				></CardList>
				{/* * Training sessions- dependent on your needs: either onsite and/or via Zoom shared screens, with a focus on:
				1. Training that reduces the time involved in bookkeeping so that you can focus on growing your business, while we focus on planting trees.
				2. Training that reduces the need for volumes of paper  */}
				<Card
					index='text'
					title='Service 2'
					body='Text here'
					body2=''
				></Card>
				{/* <Card
					index='text'
					title='1031s'
					body='We do paperless 1031 exchanges!
				With our expertise in navigating the complexities of tax laws and regulations, we can help you defer taxes and maximize your investment returns.'
					body2='From identifying potential replacement properties, to ensuring compliance with the IRS guidelines, we’ll handle every step of the process.'
				></Card> */}
				<a href='contact'>
					<Card
						index='text'
						title='Service 3'
						body='links to contact now'
						body2='Text here'
					></Card>
				</a>
			</div>
			<FullPost
				url='URL for the post'
				type=''
				title='Card here'
				summary='Graham Howes Piano Service'
				summary2='Text here text here'
				src={Placeholder}
				alt=''
			/>
			
			<div className='flex1200'>
		    	<CardList
					index='text'
					title='Service/info'
					body="Graham Howes Piano Service"
					body2='Maybe testimonials here. Voicing? Piano care? Types of pianos?'
					ull=''
					ull2=''
					ull3=''
					ull4=''
					ull5=''
					ull6=''
					oll='Text here text here'
					oll2='Text here...'
				></CardList>
				<Card
					index='text'
					title='Service/info'
					body='Pricing is competitive with the market.'
					body2=''
				></Card>
				<a href='contact'>
					<Card
						index='text'
						title='Service/info'
						body='Links to contact now. Click here to contact us today and schedule a consultation.'
						body2=''
					></Card>
				</a>
				{/* <Card
					index='text'
					title='Personal'
					body='text text text text text text text text'
					body2='text'
				></Card> */}
			</div>
			<div className='flex1200'>
				<img src={Placeholder} alt='piano' style={{maxWidth: '100vw'}}></img>
			</div>
			<Footer />
		</div>
	);
}

export default Home;
