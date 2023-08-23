
function ServiceCard(props) {
    const {title, desc,items, img} = props;
    return (
        <div className="service-card m-5 w-96 h-full pt-5 bg-white border border-gray-200 rounded-lg shadow justify-center text-center flex flex-col">
        <img
          src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
          alt="react"
          className="h-20 w-20 flex self-center"
        />
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
            </h5>
          </a>
            <ul className="text-left list-disc p-5">
              {items.map((item) => (
                <li className="pb-3"><b>{item.name}: </b>{item.content}</li>
              ))}
            </ul>
        </div>
      </div>
    );
  }
  
  export default ServiceCard;