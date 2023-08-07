import { useEffect, useState } from "react";
import { useScroll } from './scrollprovider';
import NavbarTab from "./navtab";
import NavbarLogo from "./navlogo";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [active, setActive] = useState('home');

  let openCloseNavMobile = () => {
    navbarOpen ? setNavbarOpen(false) : setNavbarOpen(true);
  }
  const { scrollY } = useScroll();

  console.log(scrollY)
  const navtabs = [
    {
      name: 'Services',
      link: '#services',
      scroll:923
    },
    {
      name: 'Technologies',
      link: '#technologies',
      scroll:1915
    },
    {
      name: 'Team',
      link: '#team',
      scroll:3087
    },
    {
      name: 'Contact',
      link: '#contact'
    }
  ]
  return (
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavbarLogo />
        <div className="flex md:order-2">
            <a href='https://calendly.com/d/37r-dbr-647/agency-call' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</a>
            <button onClick={openCloseNavMobile} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${navbarOpen ? '' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navtabs.map((tab, i) => {
              return (
                <NavbarTab key={i} active={active} setActive={setActive} name={tab.name} link={tab.link} scrolly={scrollY} scroll={tab.scroll} />
              )
            })}
          </ul>
        </div>
        </div>
      </nav>
  );
}

export default Navbar;
