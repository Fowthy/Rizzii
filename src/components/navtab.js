function NavbarTab(props) {
  console.log(props.scrolly, window.scrollY)
    if(props.scrolly >= window.scrollY) {
      props.setActive(props.name)
    }
    return (
      <li>
        <a href={props.link} 
        className={`block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0  ${props.active == props.name ? 'md:text-blue-700' : ''}`} 
        aria-current="page">{props.name}</a>
      </li>
    )
  }
export default NavbarTab;