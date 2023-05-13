import '../scss/components/_curvysection.scss';
import img from '../img/pexels-bryan-geraldo-586415.jpg';

export default function CurvySection({title, tagline, image,theClass, svgColor}) {
  const smlSvg = {fill: '#fcfbfc', width: '5rem'};

  return (
    <>
        <div className='curvysection'>
          <div className="custom-shape-divider-top-1673719581">
              <svg dataName="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
              </svg>
          </div>
          
          
          <svg xmlns="http://www.w3.org/2000/svg" style={smlSvg} width="16" height="96" fill="currentColor" class="bi bi-tree" viewBox="0 0 16 16">
                    <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
            <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
            <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>  
          </svg>
           
            {/* <img src={img} width='130' height='100' alt="test"/> */}
            <h2 className='title off-white' style={{paddingBottom: '1rem'}}>{title}</h2>
            <p className='description off-white' style={{marginTop: '0px', marginBottom: '5rem'}}>{tagline}</p>
        </div>
    </>
  )
}

// https://www.shapedivider.app/