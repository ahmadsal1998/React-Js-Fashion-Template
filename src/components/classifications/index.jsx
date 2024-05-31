import { classificationsData } from "../data"

const Classifications = () => {

  return (
    <div id='classifications' className='mt-7 lg:mt-14'>
      <h1 className="text-content text-center font-poppins text-4xl lg:text-5xl">
        Classifications
      </h1>
      <p className="text-gray font-poppins text-center text-base py-3 pb-7">
        Finding Best Products Now in Your Fingertips
      </p>
      <div className="grid grid-cols-1 min-[450px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 grid-flow-row gap-3 md:gap-4 lg:gap-12">
      {classificationsData.slice(0, 4).map((data) => (
        <div key={data.id} className="border border-border rounded-lg py-3 px-5 xl:px-7 flex justify-between">
          <span className="text-base font-poppins my-auto">
            {data.name}
          </span>
          <img
            src={data.image}
            alt="women's clothing"
            className="h-24 w-24 object-contain object-top"
          />
        </div>
        ))}
      </div>
      <div className="grid grid-cols-1 min-[450px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 grid-flow-row gap-3 md:gap-4 lg:gap-12 mt-3 md:mt-4 lg:mt-6">
      {classificationsData.slice(4, 8).map((data) => (
        <div key={data.id} className="border border-border rounded-lg py-3 px-5 xl:px-7 flex justify-between">
          <span className="text-base font-poppins my-auto">
            {data.name}
          </span>
          <img
            src={data.image}
            alt="women's clothing"
            className="h-24 w-24 object-contain object-top"
          />
        </div>
        ))}
      </div>
    </div>
  )
}

export default Classifications
