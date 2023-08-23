import {Parallax} from 'react-scroll-parallax'
import ServiceCard from '../components/serviceCard';
import { useScroll } from '../components/scrollprovider';
import { useEffect } from 'react';
function Services() {

  const services = [
    {
      title: 'Lead Generation',
      desc: 'Using the power of platforms like Facebook Ads and Google Ads, we connect you with potential clients who are actively seeking renovation services.',
      img: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
      items: [
        {
          name: 'High-Quality Leads',
          content: 'Our strategies are designed to attract leads that align with your ideal customer profile, ensuring that the prospects you receive are genuinely interested in your services.'
        },
        {
          name: 'Consistent Flow',
          content: "With our proven methods, you'll experience a steady and reliable stream of leads month after month, empowering your business growth."
        },
        {
          name: 'Increased Conversions',
          content: 'We focus on optimizing your campaigns based on data insights, leading to higher conversion rates and better return on investment.'
        },
      ]
    },
    {
      title: 'Website & Funnel Development',
      desc: 'We develop stunning websites for your business.',
      img: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
      items: [
        {
          name: 'Enhanced Online Presence',
          content: 'We ensure your online presence accurately reflects your expertise in renovation, helping you stand out in a competitive market.'
        },
        {
          name: 'Seamless User Experience',
          content: "Our user-friendly interfaces provide a smooth journey for potential clients, increasing the likelihood of lead conversion."
        },
        {
          name: 'Seamless User Experience',
          content: "da da da da da da da da da da da da da da da da da da Our user-friendly interfaces provide a smooth journey for potential clients, increasing the likelihood of lead conversion."
        },
        
      ]
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
      <h3 className='text-xl text-center max-w-xl m-auto mb-11'>{services[0].desc}</h3>
      <div className="flex justify-center h-full items-center md:pl-11 md:pr-11 lg:pl-32 lg:pr-32 xl:pl-48 xl:pr-48 flex-col md:flex-row">
        {services.map((service, i) => (
          <ServiceCard key={i} title={service.title} desc={service.desc} img={service.img} items={service.items}/>
        ))}
      </div>
      </Parallax>
      <img src="./wave2.svg" className="mt-10" />
    </div>
  );
}

export default Services;
