import {Parallax} from 'react-scroll-parallax'

function Hero() {
  return (
      <div className="hero text-center flex justify-center align-middle flex-col" id='hero'>
        <Parallax speed={10} className='paralax-container'>
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
