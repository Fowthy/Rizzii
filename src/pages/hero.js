import {Parallax} from 'react-scroll-parallax'

function Hero() {
  return (
      <div className="hero text-center flex justify-center align-middle flex-col" id='hero'>
        <Parallax speed={10}>
          <div className='text-center flex justify-center align-middle flex-col'>
        <h1 className='text-4xl text-gray-50'>Social Media Marketing Agency</h1>
        <h2 className='pb-10 text-xl text-gray-100'>Grow your business</h2>
        <a href='#services' className='button bg-gray-200 p-5 rounded-2xl w-32 flex justify-center self-center'>Explore</a>
          </div>
        </Parallax>
          <img src="./waveobj.svg" className='w-96 h-96 scale-150 top-auto bottom-auto left-auto right-auto absolute'/>
      </div>
  );
}

export default Hero;
