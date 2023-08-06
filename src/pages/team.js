
function Team() {
  return (
    <div className='team'>
    <img src='./wave5.svg'/>
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
      <img src='./wave (6).svg'/>
  </div>
  );
}

export default Team;
