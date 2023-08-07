function NavbarTab(props) {
    console.log(props)
    if(props.scrolly >= props.scroll) {
      props.setActive(props.name)
    }
    return (
      <li>
        <a onClick={() => props.setActive(props.name)} href={props.link} 
        className={`block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0  ${props.active == props.name ? 'md:text-blue-700' : ''}`} 
        aria-current="page">{props.name}</a>
      </li>
    )
  }
export default NavbarTab;