
function Team() {
  return (
    <div className='team' id='team'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <defs>
            <clipPath id="clipWave2">
        <path fill="#290025" fill-opacity="1" d="M0,128L60,138.7C120,149,240,171,360,165.3C480,160,600,128,720,96C840,64,960,32,1080,26.7C1200,21,1320,43,1380,53.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        <path fill="#290025" fill-opacity="1" d="M0,160L60,165.3C120,171,240,181,360,165.3C480,149,600,107,720,117.3C840,128,960,192,1080,234.7C1200,277,1320,299,1380,309.3L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
    </clipPath> 
        </defs>
    </svg>
    <img src='./bg.jpg' className="wavebg"/>
    <h1 className='text-4xl text-center mb-10'>Our Team</h1>
    <div className='flex justify-center'>
      <div className='flex flex-col justify-center items-center'>
        <img src='https://cdn.worldvectorlogo.com/logos/react-2.svg' alt='react' className='h-20 w-20'/>
        <h1 className='text-2xl'>Alex</h1>
        </div>
      <div className='flex flex-col justify-center items-center'>
        <img src='https://cdn.worldvectorlogo.com/logos/tailwindcss.svg' alt='tailwind' className='h-20 w-20'/>
        <h1 className='text-2xl'>Ivan</h1>
        </div>
      </div>
  </div>
  );
}

export default Team;
