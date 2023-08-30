import {Parallax} from 'react-scroll-parallax'

function Hero() {
  return (
      <div className="hero text-center flex justify-center align-middle flex-col" id='hero'>
        <Parallax speed={10} className='paralax-container'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0">
        <defs>
          <clipPath id="clipWave">
            <path d="M0,800 L60,821.3 C120,843,240,885,360,885.3 C480,885,600,843,720,805.3 C840,768,960,736,1080,762.7 C1200,789,1320,875,1380,917.3 L1440,960 L1440,0 L0,0 Z"></path>
          </clipPath>
        </defs>
      </svg>
        <img src='./bg.jpg'  className='clipped text-center flex self-center'/>
            <Parallax speed={20} className='paralax-container'>
          <div className='text-center flex justify-center align-middle flex-col mt-72 hero-wrapper w-96'>
              <h2 className='pb-10 text-5xl text-gray-100 z-10'>Empowering Renewable Energy Companies to Thrive in a Sustainable Future</h2>
              <a href='#services' className='button bg-gray-200 p-5 rounded-2xl w-32 flex justify-center self-center z-10'>Get to know us better</a>
          </div>
            </Parallax>
        </Parallax>
      </div>
  );
}

export default Hero;
