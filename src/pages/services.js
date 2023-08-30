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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 0">
          <defs>
            <clipPath id="clipWave2">
              <path  fill="#4F0147" fill-opacity="1" d="M0,256L60,234.7C120,213,240,171,360,144C480,117,600,107,720,133.3C840,160,960,224,1080,234.7C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
              <path transform="translate(0, 310)" fill="#4F0147" fill-opacity="1" d="M0,160L60,138.7C120,117,240,75,360,48C480,21,600,11,720,48C840,85,960,171,1080,213.3C1200,256,1320,256,1380,256L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </clipPath>
          </defs>
      </svg>
      <Parallax speed={20}>
      <h1 className="text-4xl text-center mb-10">Our Services</h1>
      <h3 className='text-xl text-center max-w-xl m-auto mb-11'>{services[0].desc}</h3>
      <div className="flex justify-center h-full items-center md:pl-11 md:pr-11 lg:pl-32 lg:pr-32 xl:pl-48 xl:pr-48 flex-col md:flex-row">
        {services.map((service, i) => (
          <ServiceCard key={i} title={service.title} desc={service.desc} img={service.img} items={service.items}/>
        ))}
      </div>
      </Parallax>
    </div>
  );
}

export default Services;
