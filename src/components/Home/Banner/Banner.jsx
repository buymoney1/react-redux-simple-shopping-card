import React from 'react';
import './styles.css';
// import bannerImg from './banner.png';
import Logo from '../../common/Logo/Logo';


const Banner = ({ handleScrollMenu }) => (
  <header>
    {/* <div className='header-content'> */}
      <div className='logoBanner'><Logo /></div>
     
      {/* <div className='content-main'>
        <h1>لذت چشیدن طعم دلنشین</h1>
        <p></p>
        <button onClick={handleScrollMenu}>
          دیدن منو <i className='fas fa-long-arrow-alt-right'></i>
        </button>
      </div> */}
    {/* </div> */}
    {/* <img className='header-img' src={bannerImg} alt='banner' /> */}
  </header>
);

export default Banner;
