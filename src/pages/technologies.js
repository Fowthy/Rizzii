import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

function TechnologyCard({title, desc, img}) {
  return (
    <div className='flex flex-col items-center'>
      <img src={img} alt={title} className='h-20 w-20'/>
      {/* <h3 className='text-xl text-center'>{title}</h3> */}
      {/* <p className='text-center'>{desc}</p> */}
    </div>
  )
}

function Technologies() {

  const title = "What we have mastered";

  const technologies = [
    {
      title: 'Facebook Ads',
      desc: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.',
      img: 'https://cdn.worldvectorlogo.com/logos/facebook-3.svg'
    },
    {
      title: 'Instagram Ads',
      desc: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png'
    },
    {
      title: 'LinkedIn',
      desc: 'FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints.',
      img: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png'
    },
    {
      title: 'Twitter',
      desc: 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.',
      img: 'https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png'
    },
    {
      title: 'Front-end Development with React, NextJS and TailwindCSS',
      desc: '',
      img: 'https://cdn.worldvectorlogo.com/logos/react-2.svg'
    },
    {
      title: 'Back-end Development with FastAPI, Java, MongoDB, and MySQL',
      desc: '',
      img: 'https://cdn.worldvectorlogo.com/logos/fastapi.svg'
    },
    {
      title: 'Containerization with Docker and scaling with kubernetes',
      desc: '',
      img: 'https://cdn.worldvectorlogo.com/logos/docker.svg' 
    }
  ];
  return (
    <div className='technologies' id='technologies'>
      <img src="./wave3.svg" className=''/>
      <Parallax speed={10}>
        <div className='flex-col flex'>
          <h2 className='text-center mb-20 text-3xl'>{title}</h2>
          <div className=' grid grid-flow-row gap-5 grid-cols-7 mb-11 m-auto'>
           {technologies.map((technology, i) => (
             <TechnologyCard key={i} title={technology.title} desc={technology.desc} img={technology.img}/>
            ))}
        </div>
      </div>
      </Parallax>
      <img src="./wave4.svg" className=''/>
  </div>
  );
}

export default Technologies;
