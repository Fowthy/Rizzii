import {Parallax} from 'react-scroll-parallax'
import ServiceCard from '../components/serviceCard';
import { useScroll } from '../components/scrollprovider';
import { useEffect } from 'react';
function Services() {

  const services = [
    {
      title: 'Social Media Development',
      desc: 'We develop marketing straegies.',
      img: 'https://cdn.worldvectorlogo.com/logos/react-2.svg'
    },
    {
      title: 'Website Development',
      desc: 'We develop stunning websites for your business.',
      img: 'https://cdn.worldvectorlogo.com/logos/react-2.svg'
    }
  ];
  const { setScrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setScrollY]);
  return (
    <div className="services" id='services'>
      <img src="./wave.svg" className="" />
      <Parallax speed={20}>
      <h1 className="text-4xl text-center mb-10">Our Services</h1>
      <div className="flex justify-center h-full items-center md:pl-11 md:pr-11 lg:pl-32 lg:pr-32 xl:pl-48 xl:pr-48 flex-col md:flex-row">
        {services.map((service, i) => (
          <ServiceCard key={i} title={service.title} desc={service.desc} img={service.img}/>
        ))}
      </div>
      </Parallax>
      <img src="./wave2.svg" className="mt-10" />
    </div>
  );
}

export default Services;
