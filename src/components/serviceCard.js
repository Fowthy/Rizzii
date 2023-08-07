
function ServiceCard(props) {
    const {title, desc, img} = props;
    return (
        <div class="service-card m-5 w-96 h-96 pt-5 bg-white border border-gray-200 rounded-lg shadow justify-center text-center flex flex-col">
        <img
          src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
          alt="react"
          className="h-20 w-20 flex self-center"
        />
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {title}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700">
            {desc}
          </p>
        </div>
      </div>
    );
  }
  
  export default ServiceCard;