
function Services() {
  return (
    <div className='services pt-80'>
    <h1 className='text-4xl text-center mb-10'>Our Services</h1>
    <div className='flex justify-center'>
      <div className='flex flex-col justify-center items-center'>
        <img src='https://cdn.worldvectorlogo.com/logos/react-2.svg' alt='react' className='h-20 w-20'/>
        <h1 className='text-2xl'>React</h1>
        </div>
      <div className='flex flex-col justify-center items-center'>
        <img src='https://cdn.worldvectorlogo.com/logos/tailwindcss.svg' alt='tailwind' className='h-20 w-20'/>
        <h1 className='text-2xl'>Tailwind</h1>
        </div>
      </div>
      <img src='./wave4.svg' className='mt-80'/>
  </div>
  );
}

export default Services;
