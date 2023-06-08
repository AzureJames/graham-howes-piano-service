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

			<CurvySection title="Keep Your Piano Sounding Beautiful!" tagline='Regular Maintenance is the Key.'></CurvySection>
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
			</div>  */}



				{/* <a href='http://eepurl.com/ioFNzc' className='btn btn-primary'>Subscribe</a> */}

			{/* HERO BANNER FROM BLC??
			CURVY BANNER */}
			<DevBanner
				title='About'
				tagline='(bio pic here) Graham Howes RPT is a Registered Piano Technician with the Piano Technicians Guild Inc, and a Steinway Trained Technician. Graham Howes Piano Service specializes in top quality piano tuning and regulation, appraisals, and more.'
				tagline2=''
			></DevBanner>

				{/* <h2 className='off-white'>About</h2>
				<img src={Placeholder} alt='piano' style={{maxWidth: '50rem'}}></img>
				<p className='off-white m-w65' style={{marginInline: '1rem', marginBottom: '2rem'}}>
			    	(bio pic here) Graham Howes RPT is a Registered Piano Technician with the Piano Technicians Guild Inc, and a Steinway Trained Technician. Graham Howes Piano Service specializes in top quality piano tuning and regulation, appraisals, and more.
				</p>  */}
				<div className='flex1200'>
					<a href="https://www.facebook.com/profile.php?id=100063209591685" className='btn--primary' style={{color: "navy"}}>
					Facebook Page <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
					<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
					</svg></a>
					<a href="https://www.ptg.org/home" className='btn--primary' style={{color: "navy"}}>Piano Technician's Guild <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
</svg></a>
				</div>
			</div>

			<div className='flex1200'>
			<CardList
					index=''
					title='Piano Tuning and Repair'
					body="We offer expert piano tuning and repairs. Our goal is to provide top quality service at a reasonable price."
					body2=''
					ull=''
					ull2=''
					ull3=''
					ull4=''
					ull5=''
					ull6=''
					oll=''
					oll2=''
				></CardList>
				<CardList
					index=''
					title='Concert Tuning and Voicing'
					body="We have extensive experience with preparing pianos for live concerts and recording studio sessions.  Voicing, action regulation and concert tuning are a specialty. You can have confidence that your piano will be ready for performance."
					body2=''
					ull=''
					ull2=''
					ull3=''
					ull4=''
					ull5=''
					ull6=''
					oll=''
					oll2=''
				></CardList>
								<CardList
					index=''
					title='Action Regulation and Restoration'
					body="Over time the felts, leather and wooden parts of the piano action wear down and decrease keyboard performance. Typically, regulating the action parts to their original specifications will make the keyboard play like new again. If you have a relatively new piano, this is especially important because the newer parts will 'break in' and need minor regulation. For older pianos a complete replacement of the worn action parts is appropriate."
					//Over time the felts, leather and wooden parts that make up the piano action wear down with use resulting in poor keyboard performance. In many cases regulating the action parts to their original specifications will bring the playability of the keyboard back to a like new condition. If you have a new piano that has been played for a year or two this is especially important because the newer parts will 'break in' and need minor regulation. In the case of older pianos a complete restoration of the action, replacing worn parts with new, is appropriate.
					body2=''
					ull=''
					ull2=''
					ull3=''
					ull4=''
					ull5=''
					ull6=''
					oll=''
					oll2=''
				></CardList>
								<CardList
					index=''
					title='Climate Control Systems'
					body="We install the PianoLifeSaver climate control systems for your piano. A climate control system will regulate the humidity levels inside your piano and keep the tuning more stable and protect it from damage caused by extreme humidity changes. (Dry in Winter and Humid in the Summer)"
					body2=''
					ull=''
					ull2=''
					ull3=''
					ull4=''
					ull5=''
					ull6=''
					oll=''
					oll2=''
				></CardList>
				<CardList
					index=''
					title='Piano Restorations'
					body="Fine quality pianos and heirloom instruments may be good candidates for full or partial restoration. We can evaluate your piano and help you make the right decisions based on your budget and what is right for your instrument. "
					body2=''
					ull=''
					ull2=''
					ull3=''
					ull4=''
					ull5=''
					ull6=''
					oll=''
					oll2=''
				></CardList>
				<CardList
				index=''
				title='Appraisals and Valuations'
				body="We offer written appraisals of your piano for sales and insurance purposes. If you are interested in buying a new or used piano, we can help guide you in making good a decision with your purchase."
				body2=''
				ull=''
				ull2=''
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
					title='Employment'
					body=""
					body2=''
					ull='- Hamburg Music Center'
					ull2='- Jordan Kitt’s Music (Washington DC)'
					ull3='- Peabody Institute (Baltimore MD)'
					ull4='- Denton, Cottier and Daniels'
					oll=''
					oll2=''
				></CardList>
								<CardList
					index=''
					title=''
					body=""
					body2=''
					ull='- Shea’s Buffalo'
					ull2='- Buffalo Philharmonic'
					ull3='- Phase Recording Studio (Washinton DC)'
					ull4='- Audio Magic Recording Studio'
					ull5='- Keppler Music Center (Owner)'
					oll=''
					oll2=''
				></CardList>
								<CardList
					index=''
					title=''
					body=""
					body2=''	
					ull2='- Buffalo State University'
					ull3='- SUNY at Fredonia'
					ull4='- Hamburg Central Schools'
					ull5='- West Seneca Central Schools'
					ull6='- Numerous local (WNY) Churches'
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
