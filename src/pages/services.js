import {Parallax} from 'react-scroll-parallax'
import ServiceCard from '../components/serviceCard';
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
  return (
    <div className="services pt-60" id='services'>
      <Parallax speed={20}>
      <h1 className="text-4xl text-center mb-10">Our Services</h1>
      <div className="flex justify-center h-full items-center md:pl-11 md:pr-11 lg:pl-32 lg:pr-32 xl:pl-48 xl:pr-48 flex-col md:flex-row">
        {services.map((service) => (
          <ServiceCard title={service.title} desc={service.desc} img={service.img}/>
        ))}
      </div>
      </Parallax>
      <img src="./wave2.svg" className="mt-80" />
    </div>
  );
}

export default Services;
