import '../scss/components/_bannercard.scss';
//import styles from '../styles/Card.module.css'
import { useState } from 'react';


export default function Card({index, title, body, body2}) {
    const arrow = {
        color: 'whitesmoke',
        textAlign: 'center',
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '20px'
    }
  
    
  return (
    <div className='flex'>
        <div className='bannercard' key={index} > 
            <div className='cardtop'>
                <h1 className='h2two'>{title}</h1>
            </div>
            

            <svg width="50%" viewBox="0 0 1024 768" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5}}>
                <rect x="76.252" y="487.876" width="842.143" height="110.329"/>
                <path d="M76.252,487.876L78.276,186.243C78.276,186.243 102.769,24.203 294.01,24.203C301.15,24.203 316.196,23.418 335.618,24.696C419.572,30.223 550.03,57.002 550.03,176.918C550.03,353.867 874.318,309.768 917.377,485.925C945.183,599.682 76.252,487.876 76.252,487.876Z" style={{stroke:"black",strokeWidth:"1px"}}/>
                <g transform="matrix(1.13726,0,0,1,-10.4672,0)">
                    <rect x="76.261" y="596.696" width="16.915" height="94.527"/>
                </g>
                <g transform="matrix(1,0,0,1.00351,825.013,-2.61189)">
                    <rect x="76.261" y="596.696" width="16.915" height="94.527"/>
                </g>
                <g id="oct">
                    <g transform="matrix(1,0,0,1,2,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,24,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,46,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,68,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,90,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,112,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,134,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(0.784314,0,0,0.505263,50.2792,295.866)">
                        <rect x="76.261" y="596.696" width="16.915" height="94.527"/>
                    </g>
                    <g transform="matrix(0.784314,0,0,0.505263,73.2792,295.866)">
                        <rect x="76.261" y="596.696" width="16.915" height="94.527"/>
                    </g>
                    <g transform="matrix(0.784314,0,0,0.505263,117.279,295.866)">
                        <rect x="76.261" y="596.696" width="16.915" height="94.527"/>
                    </g>
                    <g transform="matrix(0.784314,0,0,0.505263,139.279,295.866)">
                        <rect x="76.261" y="596.696" width="16.915" height="94.527"/>
                    </g>
                    <g transform="matrix(0.784314,0,0,0.505263,160.279,295.866)">
                        <rect x="76.261" y="596.696" width="16.915" height="94.527"/>
                    </g>
                </g>
                <g id="oct1"  transform="matrix(1,0,0,1,154,0)">
                    <g transform="matrix(1,0,0,1,2,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,24,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,46,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,68,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,90,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,112,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,134,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(0.784314,0,0,0.505263,50.2792,295.866)">
                        <rect x="76.261" y="596.696" width="16.915" height="94.527"/>
                    </g>
                    <g transform="matrix(0.784314,0,0,0.505263,73.2792,295.866)">
                        <rect x="76.261" y="596.696" width="16.915" height="94.527"/>
                    </g>
                    <g transform="matrix(0.784314,0,0,0.505263,117.279,295.866)">
                        <rect x="76.261" y="596.696" width="16.915" height="94.527"/>
                    </g>
                    <g transform="matrix(0.784314,0,0,0.505263,139.279,295.866)">
                        <rect x="76.261" y="596.696" width="16.915" height="94.527"/>
                    </g>
                    <g transform="matrix(0.784314,0,0,0.505263,160.279,295.866)">
                        <rect x="76.261" y="596.696" width="16.915" height="94.527"/>
                    </g>
                </g>
                <g id="oct2"  transform="matrix(1,0,0,1,308,0)">
                    <g transform="matrix(1,0,0,1,2,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,24,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,46,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,68,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,90,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,112,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,134,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(0.784314,0,0,0.505263,50.2792,295.866)">
                        <rect x="76.261" y="596.696" width="16.915" height="94.527"/>
                    </g>
                    <g transform="matrix(0.784314,0,0,0.505263,73.2792,295.866)">
                        <rect x="76.261" y="596.696" width="16.915" height="94.527"/>
                    </g>
                    <g transform="matrix(0.784314,0,0,0.505263,117.279,295.866)">
                        <rect x="76.261" y="596.696" width="16.915" height="94.527"/>
                    </g>
                    <g transform="matrix(0.784314,0,0,0.505263,139.279,295.866)">
                        <rect x="76.261" y="596.696" width="16.915" height="94.527"/>
                    </g>
                    <g transform="matrix(0.784314,0,0,0.505263,160.279,295.866)">
                        <rect x="76.261" y="596.696" width="16.915" height="94.527"/>
                    </g>
                </g>
                <g id="oct3"  transform="matrix(1,0,0,1,462,0)">
                    <g transform="matrix(1,0,0,1,2,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,24,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,46,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,68,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,90,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,112,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,134,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(0.784314,0,0,0.505263,50.2792,295.866)">
                        <rect x="76.261" y="596.696" width="16.915" height="94.527"/>
                    </g>
                    <g transform="matrix(0.784314,0,0,0.505263,73.2792,295.866)">
                        <rect x="76.261" y="596.696" width="16.915" height="94.527"/>
                    </g>
                    <g transform="matrix(0.784314,0,0,0.505263,117.279,295.866)">
                        <rect x="76.261" y="596.696" width="16.915" height="94.527"/>
                    </g>
                    <g transform="matrix(0.784314,0,0,0.505263,139.279,295.866)">
                        <rect x="76.261" y="596.696" width="16.915" height="94.527"/>
                    </g>
                    <g transform="matrix(0.784314,0,0,0.505263,160.279,295.866)">
                        <rect x="76.261" y="596.696" width="16.915" height="94.527"/>
                    </g>
                </g>
                <g id="oct4"  transform="matrix(1,0,0,1,616,0)">
                    <g transform="matrix(1,0,0,1,2,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,24,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,46,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,68,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,90,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,112,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,134,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(0.784314,0,0,0.505263,50.2792,295.866)">
                        <rect x="76.261" y="596.696" width="16.915" height="94.527"/>
                    </g>
                    <g transform="matrix(0.784314,0,0,0.505263,73.2792,295.866)">
                        <rect x="76.261" y="596.696" width="16.915" height="94.527"/>
                    </g>
                    <g transform="matrix(0.784314,0,0,0.505263,117.279,295.866)">
                        <rect x="76.261" y="596.696" width="16.915" height="94.527"/>
                    </g>
                    <g transform="matrix(0.784314,0,0,0.505263,139.279,295.866)">
                        <rect x="76.261" y="596.696" width="16.915" height="94.527"/>
                    </g>
                    <g transform="matrix(0.784314,0,0,0.505263,160.279,295.866)">
                        <rect x="76.261" y="596.696" width="16.915" height="94.527"/>
                    </g>
                </g>
                <g id="oct5"  transform="matrix(1,0,0,1,770,0)">
                    <g transform="matrix(1,0,0,1,2,0)">
                        <rect x="93.299" y="598.114" width="22.222" height="92.869" style={{fill:"white",stroke:"rgb(8,6,5)",strokeWidth:"1px"}}/>
                    </g>
                    <g transform="matrix(0.784314,0,0,0.505263,50.2792,295.866)">
                        <rect x="76.261" y="596.696" width="16.915" height="94.527"/>
                    </g>
                </g>
                <rect x="887.152" y="690.651" width="30.514" height="0.332" style={{fill:'white',stroke:'rgb(8,6,5)',strokeWidth:'0.5px'}}/>
            </svg>





            <div className='servicecard'>
                {/* <img src={pic} alt="hello" width={128} height={128}/> */}
                <ul>
                    <li>
                        <p className='large' style={{textAlign:'center'}}>{body}</p>
                        <p>{body2}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )};